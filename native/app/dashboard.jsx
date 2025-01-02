import { View, Text,TouchableOpacity,TextInput,Button,ProgressBarAndroidComponent, ProgressBarAndroid } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import CircularProgressBar from '../components/CircularProgressBar';
import { BarChart } from "react-native-gifted-charts";
import { Ionicons } from '@expo/vector-icons'

const TARGET_PROGRESS = 60;
// const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
export default function dashboard() {
  const navigation=useNavigation();
  const barData = [
    {value: 250, label: 'M',labelTextStyle: {color: 'white'}, labelWidth: 30,ValueTextStyle:{color:'red'}},
    {value: 500, label: 'T', frontColor: '#3DD68C',labelTextStyle: {color: 'white'}},
    {value: 750, label: 'W', frontColor: '#3DD68C',labelTextStyle: {color: 'white'},ValueTextStyle:{color:'red'},},
    {value: 320, label: 'T',labelTextStyle: {color: 'white'}},
    {value: 600, label: 'F', frontColor: '#3DD68C',labelTextStyle: {color: 'white'}},
    {value: 256, label: 'S',labelTextStyle: {color: 'white'}},
    {value: 300, label: 'S',labelTextStyle: {color: 'white'},topLabelComponent: () => (
        <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}></Text>
      ),},
];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < TARGET_PROGRESS) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
    
    return (
      <View className='h-[100%] bg-[#181B22] p-4'>
        <StatusBar hidden/>
          <View className='flex flex-col'>
            <View className='flex flex-row gap-52 items-start justify-around'>
              <TouchableOpacity onPress={()=>navigation.navigate('profile')}>
               <View>
                 <Text className='text-white font-bold'>Hi SAM,</Text>
               </View>
               <View>
                <Image source={require('../assets/images/avatar2.png')}/>
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('greenpoints')}>
               <View className='flex flex-row '>
               <View  className='flex '>
              <Image className='h-[20px] w-[20px]' source={require('../assets/images/grefinlogo.png')} />
              </View>
                 <View>
                  <Text className='text-white font-bold pl-3'>
                    8000
                  </Text>
                 </View>
               </View>
               </TouchableOpacity>
            </View>

            <Text className='  pt-8 font-bold text-[#3DD68C] pb-5 '>Green Score</Text>
            <View className='flex flex-row  items-center justify-center h-60 w-[325px] bg-[#303136] rounded-xl '>
            <View className='flex flex-col gap-12  '>
           <Text className='text-[#3DD68C] font-bold text-3xl '>650/1000</Text>
           <Text className='text-[#3DD68C] font-semibold text-lg'>Well Done</Text>
           <View className='flex flex-row items-center justify-start'>
           <Text className='text-[#3DD68C] font-semibold'>+ 10% </Text>
           <Ionicons name="trending-up" size={25} color="#3DD68C" />
           </View>
            </View>
            <View className=''>
            <CircularProgressBar className='pl-12' progress={60} />
            </View>
            
            </View>

            
        <View className='flex pt-10'>
        <BarChart className='text-white' width={270} barWidth={22}
                noOfSections={2}
                barBorderRadius={4}
                frontColor="orange"
                yAxisThickness={0}
                xAxisThickness={0} data = {barData} isThreeD  isAnimated
                labelTextStyle={{ color: 'red' }}
                />
        </View>
        <View className='flex pt-2 '>
        <View className="flex-row w-full bg-[#303136]   justify-around  py-3  
        rounded-t-3xl rounded-b-3xl  relative 
        ">
      <TouchableOpacity onPress={()=>navigation.navigate('dashboard')} className="flex items-center">
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
      </View>
    )
}