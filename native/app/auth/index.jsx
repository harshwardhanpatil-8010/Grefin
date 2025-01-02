import { View, Text,TouchableOpacity,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import {axios} from 'axios';



export default function index() {
  const navigation=useNavigation();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://192.168.137.1:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          pin,
        }),
      });

      if (response.status === 200) {
        navigation.navigate('dashboard');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };


  return (
    <View className='h-[100%] bg-[#181B22] p-4'>
      <StatusBar hidden/>
        <View className='flex flex-col '>
          <View className='flex flex-row gap-[21%]'>
          <View>
          <TouchableOpacity>
            <View className='h-10 w-10 flex items-center justify-center bg-slate-100  rounded'> 
            <Ionicons name="arrow-back-outline" size={25} color="black" />
            </View>
            </TouchableOpacity>
            </View>
            <View  className='flex '>
            <Image className='h-[216px] w-[216px]' source={require('../../assets/images/grefinlogo.png')} />
            </View>
          </View>

       <View className='flex flex-col leading-snug mt-[-15%] '>
        <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight'> Hey ,</Text>
        <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight mt-[-4%] '> Welcome</Text>
        <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight mt-[-5%]'> Back</Text>
        </View>

        <View className=' pt-2 flex flex-col items-center justify-center gap-4'>
          <View  className=' flex flex-row bg-[#303136] p-0.5 rounded-md'>
            <View className='mt-2 ml-2'>
          <Ionicons name="mail-outline" size={25} color="#3DD68C"  />
          </View>
          <TextInput
              className='w-[280px]  h-[41px] text-center text-[#3DD68C]'
              placeholder="Enter email"
              placeholderTextColor="#3DD68C"
              value={email}
              onChangeText={setEmail}
            />
        </View>
        <View  className='bg-[#303136] p-0.5 rounded-md flex flex-row'>
        <View className='mt-2 ml-2'>
          <Ionicons name="lock-closed-outline" size={25} color="#3DD68C"  />
          </View>
        <TextInput
              className='w-[280px]  h-[41px] text-[#3DD68C] placeholder:text-[#3DD68C] text-center'
              placeholder="Enter pin"
              placeholderTextColor="#3DD68C"
              value={pin}
              onChangeText={setPin}
              secureTextEntry
            />
        </View>
        </View>

        <View className='flex flex-row items-start justify-evenly gap-24 pt-2 '>
          <View >
       <Text className='text-[#3DD68C] text-[14px] font-medium'>  Save this </Text>
          </View>
          <View>
          <TouchableOpacity>
          <Text className='text-[#3DD68C] text-[14px] font-medium'>Forgot Password ?</Text>
          </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handleSignUp}>
     <View className='pt-36'>
<View className='flex items-center justify-center   h-[49px] w-[320px] bg-[#3DD68C]  rounded-3xl '>
  <Text className='text-[18px] font-medium'>Log in</Text>
</View>
</View>
</TouchableOpacity>
        
       
        </View>
    </View>
  )
}