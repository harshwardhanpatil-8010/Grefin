import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function FruitCard({fruit}) {
    const [isFavourite, setIsFavourite] = useState(false)
  return (
    <View style={{width:270,borderRadius:40,backgroundColor:fruit.color(1)}} 
    className='mx-5'>
        <View className='flex-row justify-end' >
            <TouchableOpacity className='p-3 rounded-full mr-4 mt-4'
            style={{backgroundColor:'rgba(255,255,255,0.3)'}}
            onPress={()=>setIsFavourite(!isFavourite)}
            >
            <Ionicons name="heart" size={25} color={isFavourite ? fruit.shadow : 'white' } />

            </TouchableOpacity>
        </View>
        <View className='flex-row justify-center'
        style={{
            shadowColor:fruit.shadow,
            shadowRadius:40,
            shadowOffset:{width:0,height:50},
            shadowOpacity:0.6
        }}>
        <Image source={fruit.image} style={{width:210,height:170}} />
        </View>
        <View className='ml-4 my-4' >
            <Text className='text-white font-bold text-xl'>
                {fruit.name}
            </Text>
            <Text className='font-bold text-lg text-white shadow tracking-wide'>
                ${fruit.price}
            </Text>
        </View>
    </View>
  )
}