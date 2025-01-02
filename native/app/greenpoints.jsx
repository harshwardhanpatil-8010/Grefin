import { View, Text,TouchableOpacity,TextInput,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import DateOfBirthPicker from '../components/DateOfBirthPicker';
import { LinearGradient } from 'expo-linear-gradient';

export default function greenpoints() {
    const [points, setPoints] = useState(0);
  const totalPoints = 8000;
  const animationDuration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    let startTime = null;

    const animatePoints = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newPoints = Math.min(totalPoints, (progress / animationDuration) * totalPoints);
      setPoints(newPoints);

      if (progress < animationDuration) {
        requestAnimationFrame(animatePoints);
      }
    };

    requestAnimationFrame(animatePoints);
  }, []);
    const navigation=useNavigation();

    return (
        <View className='h-[100%] bg-[#181B22] p-4'>
            <StatusBar hidden/>
            <View className="flex items-center justify-center p-8">
              <LinearGradient
                colors={['rgba(0, 255, 0, 0.8)', 'rgba(0, 255, 0, 0.2)', 'rgba(0, 255, 0, 0)']}
                style={{
                  position: 'absolute',
                  height: 320,
                  width: 320,
                  borderRadius: 120,
                }}
              />
              <View className="relative">
                <Image
                  className="h-[216px] w-[216px] rounded-full shadow-neonGreen"
                  source={require('../assets/images/grefinlogo.png')}
                />
              </View>
            </View>
            <Text  className='flex items-center pt-24 justify-center text-center text-white text-3xl font-semibold'>{Math.floor(points)}</Text>
           <View className='flex flex-col items-center justify-center pt-16 gap-2'>
            <Text className='text-center text-xl font-medium text-white'>Your Balance is 8000 Green coins</Text>
            <Text className='text-center text-xs font-medium  text-white leading-tight'>You can redeem the green coins earned at the Grefin store </Text>
           </View>
           <TouchableOpacity onPress={()=>navigation.navigate('shopping')}>
       <View className='pt-16'>
  <View className='flex items-center justify-center   h-[49px] w-[320px] bg-[#3DD68C]  rounded-3xl '>
    <Text className='text-[18px] font-medium'>Redeem</Text>
  </View>
  </View>
  </TouchableOpacity>

            </View>
          );
        };