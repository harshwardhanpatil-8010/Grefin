import { View, Text, Button,Image, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ColorfulCard from "@freakycoder/react-native-colorful-card";
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'


export default function rewards() {
  const navigation =useNavigation();

  return (
<View className='h-[100%] bg-[#181B22] p-4 '>
  <StatusBar hidden/>
  <View className='fle p-4'>
    <View className='flex flex-row items-center justify-between'>
    <View  className='flex '>
     <Image className='h-[40px] w-[40px]' source={require('../assets/images/grefinlogo.png')} />
     </View>
<View>
<Ionicons name="cart" size={25} color="white" />
</View>
    </View>
    <View className='flex flex-col items-start pt-9  '>
   <Text className='text-2xl text-white'>Total Balance</Text>
   <Text className='text-4xl text-[#3DD68C]'>8000</Text>
   <Text className='text-base text-white'>Green Coins</Text>
    </View>
    {/* <Button title='click me' onPress={()=>navigation.navigate('shopping')}/> */}
    <ScrollView  contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <View className='flex flex-col items-center pt-8 justify-start gap-2 w-full h-[800px] '>
    <View className='flex flex-row items-center justify-center  gap-3'>
<ColorfulCard 
  title="Grefin"
  value="100 "
  footerTitle="Green coins"
  footerValue="3h 13m"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#7954ff",height:'115%',width:'49%' }}
  onPress={() => {}}
/>
<ColorfulCard 
  title="HDFC"
  value="3%"
  footerTitle="Low interest "
  footerValue="3D 12h"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#27b525",height:'115%',width:'49%'  }}
  containerStyle={{ width: 30 }}
  onPress={() => {}}
/>
</View>
<View className='flex flex-row items-center justify-center pt-8 gap-3'>
<ColorfulCard 
  title="Eco Trend"
  value="10%"
  footerTitle="off on store"
  footerValue="3h 13m"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#d72fa2",height:'115%',width:'49%' }}
  onPress={() => {}}
/>
<ColorfulCard 
  title="SBI"
  value="3%"
  footerTitle="Low interest"
  footerValue="5h 13m"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#f05f24",height:'115%',width:'49%'  }}
  containerStyle={{ width: 30 }}
  onPress={() => {}}
/>
</View>
<View className='flex flex-row items-center justify-center pt-8 gap-3'>
<ColorfulCard 
  title="falhari"
  value="15%"
  footerTitle="off on store"
  footerValue="3h 13m"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#c1c329",height:'115%',width:'49%' }}
  onPress={() => {}}
/>
<ColorfulCard 
  title="Polo Style"
  value="20%"
  footerTitle="off on store"
  footerValue="3h 13m"
  iconImageSource={require("../assets/images/grefinlogo.png")}
  style={{ backgroundColor: "#7954ff",height:'115%',width:'49%'  }}
  containerStyle={{ width: 30 }}
  onPress={() => {}}
/>
</View>
</View>

</ScrollView>

</View>  
</View>
)
}