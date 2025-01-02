import { View, Text,TouchableOpacity,TextInput,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import DateOfBirthPicker from '../../components/DateOfBirthPicker';

export default function dob() {
    const navigation=useNavigation();

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
  
            <View className='flex items-center justify-center  pt-2'>
                <Text className='text-[#3DD68C] text-[32px] font-semibold text-center'>  Enter Your Date of Birth</Text>
            </View>
            <View className='flex items-center justify-center  pt-2'>
                <Text className='text-white text-[12px] font-semibold text-center'>Only individuals 18 years and older are allowed.</Text>
            </View>

          <View>
            <DateOfBirthPicker/>
          </View>
  
          <TouchableOpacity >
       <View className='pt-5'>
  <View className='flex items-center justify-center   h-[49px] w-[320px] bg-[#3DD68C]  rounded-3xl '>
    <Text className='text-[18px] font-medium'>Confirm</Text>
  </View>
  </View>
  </TouchableOpacity>
          
         
          </View>
      </View>
    )
}