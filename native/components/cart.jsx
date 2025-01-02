import { View, Text ,Image,TouchableOpacity,StyleSheet,ToastAndroid,StatusBar} from 'react-native'
import React from 'react'

import Toast from 'react-native-toast-message';


export default function Cart() {
  const showToast = () => {
    Toast.show({
      type: 'success', // You can use 'error', 'info', 'warning' as well
      text1: 'Added To Cart Successfully',
      position: 'top',
      // text2: 'This is a toast message',
    });
  }; 
  
    return (
        <View  className='flex '>
           
          <TouchableOpacity onPress={showToast}  className=' border-transparent border-[3px] pt-1 pb-1 '>
            <Text className='text-lg text-center  text-white font-semibold px-20 '>
            Redeem for 1000 green coins
            </Text>
          </TouchableOpacity>
          <Toast ref={(ref) => Toast.setRef(ref)}  />
        </View>
      )
}
