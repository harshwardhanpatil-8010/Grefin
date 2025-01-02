const express = require('express')
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const User = require('../Models/userSchema');
const UserVerification = require('../Models/userVerificationSchema')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const router = express.Router()
require('dotenv').config(); 

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

transporter.verify((error, success) =>{
    if(error) {
        console.log(error);
    } else {
        console.log("Ready for messages")
        console.log(success)
    }
})

const sendVerificationEmail = async (firstName, email, verificationUrl) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            text: `Hello ${firstName},\n\nPlease verify your email by clicking the following link: ${verificationUrl}\n\nThank you!,
            html: <p>Hello ${firstName},</p><p>Please verify your email by clicking the following link: <a href="${verificationUrl}">${verificationUrl}</a></p><p>Thank you!</p>`
        };

        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to:', email);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


router.post('/sign_up', async(req,res) => {
    let {firstName, lastName, email, pin, mobileNo, dob} = req.body;
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    mobileNo = mobileNo.trim();
    dob = dob.trim();

    if(firstName=="" || lastName=="" || email=="" || pin=="" || mobileNo=="" || dob=="") {
        res.json({
            status: "FAILED",
            message: "Please fill all the fields"
        });
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        return res.status(400).json({
            message: 'First name must contain only alphabets.'
        });
    } else if (!/^[A-Za-z]+$/.test(lastName)) { 
        return res.status(400).json({
            message: 'Last name must contain only alphabets.'
        });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            message: 'write proper email format.'
        });
    } else if(!/^\d{4}$/.test(pin)){
        return res.status(400).json({
            message: 'Pin must be 4 digits'
        })
    } else if(!/^\d{10}$/.test(mobileNo)){
        return res.status(400).json({
            message: 'Mobile number must be of 10 digits only'
        })
    }
    
    const user = await User.findOne({email});
    if(user) {
        return res.status(400).json({
            message: 'A user already exists with that email address',
            data: user
        })
    }

    try {
        const saltRounds = 10; 
        const hashedPin = await bcrypt.hash(pin, saltRounds);

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            pin: hashedPin,
            mobileNo: mobileNo,
            dob: dob,
        })
        newUser.save()
        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });

        const userVer = new UserVerification({
            user_id: newUser._id,
            verification_code: crypto.randomBytes(20).toString('hex'),
            createdAt: Date.now(),
            expiresIn: Date.now() + 3600000,
        })
        userVer.save()

        const verificationLink = `http://localhost:8000/user/verify_email/${userVer.verification_code}`

        await sendVerificationEmail(firstName, email, verificationLink)
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: 'Server error, please try again later',
        });        
    }
})

router.get('/verify_email/:code', async(req, res)=>{
   try {
    const code = await UserVerification.findOne({
        verification_code: req.params.code,
    });
    console.log(code)
    await User.updateOne({ _id: code.user_id }, {$set: {verified: true}})
    await UserVerification.deleteOne({verification_code: code.verification_code})
    res.status(200).send({
        message: "EMAIL VERIFIED"
    })
   } catch (error) {
    res.status(400).send({
        message: "AN ERROR OCCURRED"
    })    
   }
})

router.post('/login', async(req, res)=> {
    const { email, pin } = req.body;
    if (!email && !pin) {
        return res.status(400).json({
            status: "FAILED",
            message: "Email and pin both are required"
        });
    }

    try{
        const user =await User.findOne({email})
        if(!user){
            return res.status(404).json({
                status: "FAILED",
                message: "User not found with the entered email address"
            });
        }

        const isMatch = await bcrypt.compare(pin, user.pin);
        if (!isMatch) {
            return res.status(400).json({
                status: "FAILED",
                message: "Invalid pin"
            });
        }

        const token = jwt.sign({userId: user._id},
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.status(200).json({
            status: "SUCCESS",
            message: "Login successful",
            data: user,
            token
        }); 
        
        
    }catch(error){
        console.error(error);
        return res.status(500).json({
            status: "FAILED",
            message: "An error occurred during the login process"
        });

    }   
})

router.post('/logout', async (req, res) => {
    const { userId } = req.body; // Ensure you get the user ID from the request

    if (!userId) {
        return res.status(400).json({
            status: "FAILED",
            message: "User ID is required"
        });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: "FAILED",
                message: "User not found"
            });
        }
        user.verified = false;
        await user.save();

        return res.status(200).json({
            status: "SUCCESS",
            message: "User has been logged out"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "FAILED",
            message: "An error occurred during logout"
        });
    }
});

module.exports = router;