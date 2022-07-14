import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import { TouchableOpacityBase } from 'react-native-gesture-handler'

const Home = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    return (
        <View style={styles.container}>
            <Image source={require("../img/1.png")} style={styles.img} />
            <Text style={styles.title}>MX25 Scooter</Text>
            <Text style={styles.detail}>
                With an updated motor, and integrated anti-theft tech the maxx scooter are custom-tuned for the ultimate riding experience.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={()=> props.navigation.navigate("Detail") }>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212'
    },
    img:{
        height:"50%",
        width:"100%",
        resizeMode:"contain"
    },
    title:{
        color:"#fff",
        fontFamily:"Montserrat_700Bold",
        fontWeight:'bold',
        fontSize:30,
        marginTop:20
    },
    detail:{
        color:"#fff",
        fontFamily:"Montserrat_400Regular",
        fontSize:17,
        textAlign:'center',
        paddingHorizontal:5,
        lineHeight:30,
        marginTop:30
    },
    btn:{
        marginTop:40,
        backgroundColor:'#e2443b',
        paddingHorizontal:140,
        paddingVertical:10,
        borderRadius:30
    },
    text:{
        fontFamily:'Montserrat_600SemiBold',
        color:'#fff',
        fontSize:25
    }
})
export default Home
