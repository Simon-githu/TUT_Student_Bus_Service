//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from "react-native";
import * as Animatable from "react-native-animatable";
import redBg from "../assets/images/yellowBg.png";
import Logo from "../assets/images/tutLogo.png";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import BusOptions from "../components/BusStudent";
import BusDriver from "../components/BusDriver";
// create a component
const BusDriverHomeScreen = () => {


  return (
   <>   
       <View style={{flex: 1}}>
        {/* TOP VIEW */}
        <Animatable.View animation="fadeIn" easing="ease-in">
        <ImageBackground
          source={redBg}
          style={styles.topView}
          imageStyle={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Image source={Logo} style={styles.logo} />
        </ImageBackground>
      </Animatable.View>
    
      <BusDriver/>
    </View>
  
</>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  topView: {
    width: "100%",
    height: 100,
    alignItems: "flex-start",
  },
  logo: {
    height: 60,
    width: 60,
    top: 20,
    right: 40,
    position: "absolute",
  },
});

//make this component available to the app
export default BusDriverHomeScreen;
