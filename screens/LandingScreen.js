import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import busImage from "../assets/images/tutStabus.jpg"
import Logo from '../assets/images/tutLogo.png'
import * as Animatable from 'react-native-animatable';
import UserTypes from '../components/UserTypes'

const LandingScreen = () => {
    return (
        <View>
         <StatusBar style="light"/>
        {/* TOP VIEW */}
            <Animatable.View animation="fadeIn" easing="ease-in">
                <ImageBackground source={busImage} style={styles.topView} imageStyle={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <Image source={Logo} style={styles.logo}/>
                </ImageBackground>
            </Animatable.View>
            {/* Choose user */}
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:30,marginBottom:30}}> 
           <Animatable.Text animation="bounceInUp" style={{fontWeight:"bold",fontSize:20}}>Who</Animatable.Text>
            <Animatable.Text animation="bounceInUp" delay={500} style={{fontWeight:"bold",fontSize:20,padding:10}}>are</Animatable.Text>
            <Animatable.Text animation="bounceInUp" delay={1000}style={{fontWeight:"bold",fontSize:20}}>you</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={2000}style={{fontWeight:"bold",fontSize:20}}>?</Animatable.Text>
            </View>
            {/* CHOOSE USER FLATLIST */}
            <UserTypes/>
            
        </View>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
topView:{
    width:"100%",
    height:280,
    alignItems: "flex-end",
},logo:{
    height:100,
    width:100,
    top:30,
    right:20,
    position: "absolute"
  },
  
})
