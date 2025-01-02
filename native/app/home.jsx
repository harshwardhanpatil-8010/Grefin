import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Button
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants/index2"
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {  PieChart } from "react-native-gifted-charts";

const home = () => {
const navigation =useNavigation();
    const featuresData = [
        {
            id: 1,
            icon: icons.cart,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transport"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Bank"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Grefin"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Tech"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Ent"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Metro",
            description: "INR 20"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Indigo",
            description: "INR 4000"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Grefin Store",
            description: "INR 2000"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: " Rapido",
            description: "INR 500"
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 }}>
                    <Text className='text-2xl text-white font-semibold '>Hi Sam ,</Text>
                    {/* <Text style={{ ...FONTS.body2, color: COLORS.gray }}>ByProgrammers</Text> */}
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                        className='rounded-lg'
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text className='text-xl font-bold text-white'>Transaction Categories</Text>
                {/* <Button onPress={()=> navigation.navigate('dashboard')} title="click me baby"/> */}
            </View>
            
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }} className='text-white'>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        )

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text className='text-white text-xl font-bold'>Latest Transactions</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    {/* <Text className='text-white'>View All</Text> */}
                </TouchableOpacity>
            </View>

        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={images.promoBanner}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4 }} className='pt-4'>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#181B22' }}>
            <StatusBar hidden/>
            {renderPromos()}
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

export default home;