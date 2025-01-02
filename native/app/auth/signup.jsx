import { View, Text,TouchableOpacity,TextInput,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';


export default function signup() {
    const navigation=useNavigation();
    return (
      <View className='h-[100%] bg-[#181B22] p-4'>
        <StatusBar hidden/>
          <View className='flex flex-col '>
            <View className='flex flex-row gap-[21%]'>
            <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
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
          <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight'> Let's ,</Text>
          <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight mt-[-5%] '> get</Text>
          <Text className='text-[#3DD68C] text-[44px] font-extrabold  leading-tight mt-[-6%]'> started</Text>
          </View>
          <View className=' pt-2 flex flex-col items-center justify-center gap-4'>
            <View  className=' flex flex-row bg-[#303136] p-0.5 rounded-md'>
              <View className='mt-2 ml-2'>
            <Ionicons name="mail-outline" size={25} color="#3DD68C"  />
            </View>
          <TextInput className='w-[280px] text-sm  h-[41px] text-center text-[#3DD68C]    '
            placeholder="Enter email"  placeholderTextColor="white"
          />
          </View>
          <View  className='bg-[#303136] p-0.5 rounded-md flex flex-row'>
          <View className='mt-2 ml-2'>
            <Ionicons name="lock-open-outline" size={25} color="#3DD68C"  />
            </View>
          <TextInput className='w-[280px]  text-sm h-[41px] text-[#3DD68C] placeholder:text-[#3DD68C] text-center'
            placeholder="set password" placeholderTextColor="white"  secureTextEntry={true}
          />
          </View>
          <View  className='bg-[#303136] p-0.5 rounded-md flex flex-row'>
          <View className='mt-2 ml-2'>
            <Ionicons name="lock-closed-outline" size={25} color="#3DD68C"  />
            </View>
          <TextInput className='w-[280px]  text-sm h-[41px] text-[#3DD68C] placeholder:text-[#3DD68C] text-center'
            placeholder="Confirm password" placeholderTextColor="white"  secureTextEntry={true}
          />
          </View>

          </View>
  
        
  
          <TouchableOpacity >
       <View className='pt-32'>
  <View className='flex items-center justify-center   h-[49px] w-[320px] bg-[#3DD68C]  rounded-3xl '>
    <Text className='text-[18px] font-medium'>Sign up</Text>
  </View>
  </View>
  </TouchableOpacity>
          
         
          </View>
      </View>
    )
}