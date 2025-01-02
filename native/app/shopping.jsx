import { View, Text,TouchableOpacity,SafeAreaView,ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
// import {Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import { categories,featuredFruits } from '../constants';
import FruitCard from '../components/fruitCard';
import FruitCardSales from '../components/fruitCardSales';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';


export default function shopping() {
    const [activeCategory, setActiveCategory] = useState('oranges')
    const navigation=useNavigation();
    return (
      <SafeAreaView className='flex-1 bg-[#181B22] overflow-y-auto p-3'>
        <StatusBar hidden/>
        {/* topbar */}
      <View className='flex-row mx-5 justify-between items-center' >
      <TouchableOpacity>
            <View className='h-10 w-10 flex items-center justify-center bg-slate-100  rounded'> 
            <Ionicons name="arrow-back-outline" size={25} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View className='h-10 w-10 flex items-center justify-center bg-slate-100  rounded'> 
            <Ionicons name="cart" size={25} color="black" />
            </View>
            </TouchableOpacity>
      </View>
      <View className='flex p-5'>
  <View className='flex flex-row items-start justify-between mb-3 p-3 bg-slate-100 h-10 rounded-md'>
    <TextInput placeholder='Products...'/>
    <Ionicons name="search" size={17} color="black" />
  </View>
  </View>
  <View className='flex flex-row items-center justify-start gap-3 pl-4 mt-[-5%]'>
    <View>
  <Ionicons name="location" size={25} color="#3DD68C" />
  </View>
  <View>
    <Text className='text-sm text-white  font-medium   '>Delevering to  </Text>
  </View>
  <View>
    <Text className='text-sm   font-medium  text-[#3DD68C] '>IIT JODHPUR </Text>
  </View>
  </View>
      {/* Categories */}
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

      <View className='mt-4  ' >
        <Text  className='text-2xl text-white tracking-widest font-medium  ml-5 ' >
          Grefin Store
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-8 px-5 '  >
        {
          categories.map((category,index)=>{
            let isActive =category ==activeCategory;
            let textClass =`text-xl ${isActive ? 'font-bold' : '' } text-[#3DD68C] `
           return(
            <TouchableOpacity key={index} onPress={()=>setActiveCategory(category)}  className='mr-8 rounded-2xl ' >
              <Text className={textClass} >
                {category}
              </Text>
              {
                isActive ? (
              <Text className='font-extrabold text-orange-400 -mt-3 ml-2  ' >__ _</Text>
                ) :null
          }
            </TouchableOpacity>
           )
          })
        }
        </ScrollView>
      </View>
  
      {/* Fruit Carousel */}
      <View className='mt-8'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {
          featuredFruits.map((fruit,index)=> <FruitCard fruit={fruit} key={index} />  )
        }
        </ScrollView>
      </View>
  
      {/* Hot Sales */}
      <View className='mt-4 pl-5 space-y-5'>
       <Text className='text-xl font-bold text-white'>
        Hot Sales
       </Text>
       <ScrollView
       horizontal 
       showsHorizontalScrollIndicator={false}
       style={{overflow:'visible'}}>
      {
        [...featuredFruits].reverse().map((fruit,index)=> <FruitCardSales fruit={fruit} key={index} /> )
      }
       </ScrollView>
      </View>
</ScrollView>
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

  </SafeAreaView>
    )
  }