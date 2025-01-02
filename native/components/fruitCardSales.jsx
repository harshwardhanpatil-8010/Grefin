import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
// import { useNavigation } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
// import AppNavigation from '../navigation/appNavigation';

export default function FruitCardSales({fruit}) {
    const navigation= useNavigation();
    // , color: fruit.color(1)
    // onPress={()=> navigation.navigate('ProductScreen', {...fruit})}
    const handlePress = () => {
      if (fruit.name === 'Australian Orange') {
        navigation.navigate('OrangeFruitScreen'),{ fruitData: fruit }
      } else if (fruit.name === 'Flesh Nectari') {
        navigation.navigate('FleshNectari'),{ fruitData: fruit }; 
      } else if (fruit.name === 'Black Grapes') {
        navigation.navigate('BlackGrapes'), { fruitData: fruit } 
      } else if (fruit.name === 'Red Grapefruit') {
        navigation.navigate('RedGrapefruit'), { fruitData: fruit } 
      } else if (fruit.name === 'Green Apple') {
        navigation.navigate('GreenApple'), { fruitData: fruit }
      } 

    };
  
  return (
    <View className='mr-6'>
      <TouchableOpacity onPress={handlePress}
  className='flex-row justify-center -mb-9 shadow-lg z-20'>
        <Image source={fruit.image} style={{height:65,width:65,shadowColor:fruit.shadow,overflow:'visible',shadowRadius:15,shadowOffset:{width:0,height:20},shadowOpacity:0.4}}/>
      </TouchableOpacity>
      <View style={{backgroundColor:fruit.color(0.4),height:70,width:80}}
      className='rounded-3xl flex justify-end items-start'
      >
        <Text className='font-semibold text-center text-white pb-3 ml-5 tracking-wide'>
         ${fruit.price}
        </Text>
      </View>
    </View>
  )
}