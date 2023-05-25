import React from "react"
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
export default function Entry() {

    const navigation = useNavigation();

    const Home = () =>{
        navigation.navigate('Home');
    }

    const Next = () =>{
        navigation.navigate('Entry2');
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#282C34', paddingHorizontal: 25 }}>
                <StatusBar barStyle="light-content" />
                <View style={{ backgroundColor: '#224261', width: 416, height: 416, justifyContent: 'center', alignItems: 'center', borderRadius: 300, position: 'absolute', top: -300, opacity: 0.2 }} />
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/icons/home1.png')} />
                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Search your candidate</Text>
                        <Text style={{ fontSize: 15, color: '#fff', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Figure out your top five priorities whether it is experience, loyalty.</Text>

                        <View style={{ justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', flexDirection:'row', flexWrap:'wrap', marginTop:40 }}>
                            <TouchableOpacity onPress={Home} style={{backgroundColor: 'transparent', width: '48%', height: 56, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <Text style={{color:'#fff'}}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Next} style={{backgroundColor: '#2C557D', width: '48%', height: 56, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                                <Text style={{color:'#fff'}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}