import { View, Text,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
// import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
// import StarRating from 'react-native-star-rating';
import Cart from '../components/cart';
import { StatusBar } from 'expo-status-bar';

export default function RedGrapefruit() {
    const navigation=useNavigation();
    return (
      <View className='bg-red-500 flex-1 ' >
        <StatusBar hidden/>
          <SafeAreaView>
          <View className="flex-row justify-start mx-2">
          <TouchableOpacity className='pt-2'>
            <View className='h-10 w-10 flex items-center justify-center bg-slate-100  rounded'> 
            <Ionicons name="arrow-back-outline" size={25} color="black" />
            </View>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-4 pb-10 " style={{
                  shadowColor: 'green',
                  shadowRadius: 50,
                  shadowOffset: {width: 0, height: 50},
                  shadowOpacity: 0.7,
              }}>
        <Image source={require('../assets/images/fashion.png')} style={{height:270,width:290}} />
        </View>
        </SafeAreaView>
        <View style={{borderTopLeftRadius:45,borderTopRightRadius:45}} 
        className='bg-white flex-1 px-6 space-y-2  '
        >
          <View className='flex flex-row '>
        <Text className='text-black font-semibold text-2xl mt-8 '>
        Eco trend
        </Text>
        <Text className='text-black font-semibold text-2xl mt-8 ml-28'>
          $ 10
        </Text>
        </View>
        {/* <StarRating
                  starStyle={{marginTop:8}}
                  disabled={true}
                  starSize={18}
                  containerStyle={{width: 140}}
                  maxStars={5}
                  rating={4}
                  emptyStarColor="lightgray"
                  // emptyStar={require('../assets/images/emptyStar.png')}
                  fullStar={require('../assets/images/fullStar.png')}
              /> */}
        <Text className='text-black font-semibold text-base  mb-5' >
        Discover our eco-friendly T-shirt, crafted from sustainable materials for a stylish and responsible choice. Enjoy comfort, durability, and a reduced carbon footprint with this environmentally conscious wardrobe essential.
        </Text>
        <View className='bg-red-500 rounded-xl'>
      <Cart />
      <TouchableOpacity   className=' border-transparent border-[3px] pt-3 pb-1 '>
            <Text className='text-lg text-white font-semibold px-20 '>
            Redeem For 1000 Green Coins
            </Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
    )
}