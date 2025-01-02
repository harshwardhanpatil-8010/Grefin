import { View, Text, SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function ProductScreen(props) {

let fruit=props.route.params
// style={{backgroundColor:fruit.color}} 
// const fruit=params.route
// console.log('fruit: ',fruit);
const navigation=useNavigation();
  return (
    <View className="flex-1" style={{backgroundColor:'white'}} >
      <SafeAreaView>
        <TouchableOpacity>
        <Ionicons name="chatbubble" size={25} color="#3DD68C" />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
      <Image source={fruit.image} style={{width:290,height:290}} />
      </View>
    </View>
  )
}