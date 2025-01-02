import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import { useNavigation } from 'expo-router';

export default function profile() {
    const navigation=useNavigation();
    const handleComposeEmail = () => {
        const email = 'contacts@grefin.com'; // Replace with the recipient's email address
        const subject = 'Hello from React Native'; // Replace with your email subject
        const body = 'This is a test email.'; 
    
        const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        Linking.openURL(mailtoURL).catch(err => console.error('An error occurred', err));
      };
    return (
        <View className="flex-1 bg-[#181B22]  p-4">
            <StatusBar hidden/>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white">My Profile</Text>
            <Ionicons name="menu" size={25} color="#3DD68C" />
          </View>
          
          <View className="mt-4 items-center">
            <Image
             source={require('../assets/images/grefinlogo.png')}
              className="w-24 h-24 rounded-full"
            />
            <Text className="mt-2 text-xl font-semibold text-white">Sam Altman</Text>
            <Text className="text-gray-500">Senior Designer</Text>
          </View>
          <View className="mt-4">
            <Text className="text-white ">My Status</Text>
            <View className="flex-row mt-2 space-x-2">
              <TouchableOpacity className="flex-row items-center px-4 py-2 bg-black rounded-full">
              <Ionicons name="happy" size={25} color="#3DD68C" />
                <Text className="ml-2 text-white">Well done</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center px-4 py-2 bg-green-100 rounded-full">
              <Ionicons name="briefcase" size={25} color="#3DD68C" />
                <Text className="ml-2 text-green-800">At Work</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center px-4 py-2 bg-yellow-100 rounded-full">
              <Ionicons name="game-controller" size={25} color="#3DD68C" />
                <Text className="ml-2 text-yellow-800">Gaming</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="mt-4 ">
            <Text className="text-white pb-3">Dashboard</Text>
            <View className="mt-2 space-y-2 flex gap-5">
              <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} className="flex-row items-center justify-between px-4 py-2 p-3 bg-white rounded-lg">
                <View className="flex-row items-center">
                    <View className='h-9 w-9 bg-green-500 rounded-full items-center justify-center '>
                <Ionicons name="card" size={25} color="white" />
                </View>
                  <Text className="ml-2 font-bold">Payments</Text>
                </View>
                <Text className="bg-blue-500 text-white p-2 text-xs font-semibold rounded-full">2 New</Text>
              </TouchableOpacity>
              <TouchableOpacity className=" flex-row items-center justify-between px-4 py-2 p-3 bg-white rounded-lg">
                <View className="flex-row items-center">
                <View className='h-9 w-9 bg-green-500 rounded-full items-center justify-center '>
                <Ionicons name="information-circle" size={25} color="white" />
                </View>
                  <Text className="ml-2 font-bold">About grefin</Text>
                </View>
                <Ionicons  name="chevron-forward-outline" size={25} color="#3DD68C" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleComposeEmail} className="flex-row items-center justify-between p-3 bg-white rounded-lg">
                <View className="flex-row items-center">
                <View className='h-9 w-9 bg-green-500 rounded-full items-center justify-center '>
                <Ionicons name="lock-closed" size={25} color="white" />
                </View>
                  <Text className="ml-2 font-bold">Report</Text>
                </View>
                <Text className="bg-red-500 text-white p-2 font-medium
                  text-xs rounded-full">mail us</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="mt-4 flex flex-grow">
            <Text className="text-gray-600">My Account</Text>
            <View className=" space-y-2">
              <TouchableOpacity className="">
                <Text className="text-red-600">Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        
          <View className='flex pt-2 '>
        <View className="flex-row w-full bg-[#303136]   justify-around  py-3  
        rounded-t-3xl rounded-b-3xl  relative 
        ">
      <TouchableOpacity  onPress={()=>navigation.navigate('dashboard')} className="flex items-center">
      <Ionicons name="home" size={25} color="#3DD68C" />
        <Text className="text-xs text-white pt-0.5 ">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('shopping')}  className="flex items-center" >
      <Ionicons name="cart" size={25} color="#3DD68C" />
        <Text className="text-xs text-white pt-0.5 ">Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('home')} className="flex items-center">
      <Ionicons name="podium" size={25} color="#3DD68C" />
        <Text className="text-xs text-white pt-0.5 ">history</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('rewards')} className="flex items-center">
      <Ionicons name="gift" size={25} color="#3DD68C" />
        <Text className="text-xs text-white pt-0.5 ">Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('profile')} className="flex items-center">
      <Ionicons name="person" size={25} color="#3DD68C" />
        <Text className="text-xs text-white pt-0.5 ">Profile</Text>
      </TouchableOpacity>
    </View>
        </View>
        </View>
      );
    };
