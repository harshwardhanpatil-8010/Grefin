import { View, Text ,Image,TouchableOpacity,StyleSheet,ToastAndroid,StatusBar} from 'react-native'
import React from 'react'
// import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
// import StarRating from 'react-native-star-rating';
import Cart from '../components/cart'
import Toast from 'react-native-toast-message';



export default function GreenApple() {
  

  // const showToastWithGravity = () => {
  //   ToastAndroid.showWithGravity(
  //     'All Your Base Are Belong To Us',
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER,
  //   );
  // };
  const showToast = () => {
    Toast.show({
      type: 'success', // You can use 'error', 'info', 'warning' as well
      text1: 'Hello',
      text2: 'This is a toast message',
    });
  };
  
    const navigation=useNavigation();
    
  return (
    <View className='bg-green-400 flex-1 ' >
        <SafeAreaView>
        <View className="flex-row justify-start mx-2">
      <TouchableOpacity style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="border border-gray-50 rounded-xl -mt-4 ">
      <Ionicons name="cart" size={25} color="#3DD68C" />
      </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-4 pb-10 " style={{
                shadowColor: 'green',
                shadowRadius: 50,
                shadowOffset: {width: 0, height: 50},
                shadowOpacity: 0.7,
            }}>
      <Image source={require('../assets/images/greenApple.png')} style={{height:270,width:290}} />
      </View>
      </SafeAreaView>
      <View style={{borderTopLeftRadius:45,borderTopRightRadius:45}} 
      className='bg-white flex-1 px-6 space-y-2  '
      >
        <View className='flex flex-row '>
      <Text className='text-black font-semibold text-2xl mt-8 '>
        Green Apple
      </Text>
      <Text className='text-black font-semibold text-2xl mt-8 ml-28'>
        $ 20
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
      <Text className='text-black font-semibold text-base mb-2 ' >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti aut esse est rem error expedita cumque laboriosam ipsa iure. Dolorem nemo qui officiis mollitia delectus similique doloremque modi quam
      </Text>
      <View  className='bg-green-400 rounded-xl'>
      <Cart  onPress={showToast}  />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
      </View>
    </View>
  )
}

