import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";
import redBg from "../assets/images/redBg.png";
import Logo from "../assets/images/tutLogo.png";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons, Feather, Ionicons,AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {Picker} from '@react-native-picker/picker';

const StudentScreen = () => {
const [campus,setCampus]=useState()
  const navigation = useNavigation();


  return (
    <KeyboardAvoidingView
      behavior="position"
    >
      <StatusBar style="light" />
      {/* TOP VIEW */}
      <Animatable.View animation="fadeIn" easing="ease-in">
        <ImageBackground
          source={redBg}
          style={styles.topView}
          imageStyle={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 100,
          }}
        >
          <Image source={Logo} style={styles.logo} />
        </ImageBackground>
      </Animatable.View>
      {/* ENTER CREDENTIALS VIEW */}
      <View style={styles.credentials}>
        {/* Back Icon */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 15 }}
        >
        <Animatable.View animation="slideInRight">
          <Ionicons name="ios-chevron-back" size={30} color="red" />
          </Animatable.View>
        </TouchableOpacity>
        {/* Heading */}
        <Animatable.View animation="bounceIn" style={styles.headingView}>
          <Text style={styles.heading}>Student</Text>
        </Animatable.View>

        {/* Inputs */}
      <Animatable.View animation="fadeIn" delay={500} style={{width:"100%"}}>  
      <Input
          keyboardType="email-address"
          placeholder="email@address.com"
          leftIcon={
            <MaterialCommunityIcons name="email" size={20} color="grey" />
          }
        />
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={1000} style={{width:"100%"}}> 
        <Input
          keyboardType="phone-pad"
          placeholder="216244256"
          maxLength={9}
          leftIcon={<Feather name="user" size={20} color="grey" />}
        />
        </Animatable.View>
        {/* Dropdown */}
      
        <Animatable.View animation="fadeIn" delay={1500} style={{width:"93%",borderBottomWidth:1,borderColor:"grey"}}>
        <Picker
  selectedValue={campus}
  onValueChange={(itemValue, itemIndex) =>
    setCampus(itemValue)
  }>
    <Picker.Item label="Select Campus" value="Select Campus" style={{color: 'grey'}} />
  <Picker.Item label="Arcadia" value="Arcadia" />
  <Picker.Item label="Arts" value="Arts" />
  <Picker.Item label="Pretoria" value="Pretoria" />
  <Picker.Item label="Ga-Rankuwa" value="Ga-Rankuwa" />
  <Picker.Item label="Soshanguve South" value="Soshanguve South" />
  <Picker.Item label="Soshanguve North" value="Soshanguve North" />
  <Picker.Item label="eMalahleni" value="eMalahleni" />
  <Picker.Item label="Mbombela" value="Mbombela" />
  <Picker.Item label="Polokwane" value="Polokwane" />
</Picker>
</Animatable.View>

        {/* Button */}
        <Animatable.View animation="fadeIn" delay={2000}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StudentScreen;

const styles = StyleSheet.create({
  topView: {
    width: "100%",
    height: 300,
    alignItems: "flex-end",
  },
  logo: {
    height: 100,
    width: 100,
    top: 30,
    right: 20,
    position: "absolute",
  },
  credentials: {
    width: 320,
    height: 430,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 20,
    borderRadius: 20,
    elevation: 10,
  },
  heading: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
  headingView: {
    borderWidth: 2,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    bottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
});
