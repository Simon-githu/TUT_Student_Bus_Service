import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/core";
const UserTypes = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      title: "I am a student",
      imageBackgroundColor: "red",
      backgroundColor: "#FF7F7F",
      image: require("../assets/images/student.png"),
      screen: "Student",
    },
    {
      id: 2,
      title: "I am a Bus Driver",
      imageBackgroundColor: "yellow",
      backgroundColor: "#F7F1AF",
      image: require("../assets/images/busDriver.png"),
      screen: "BusDriver",
    },
    {
      id: 3,
      title: "I am a Bus Monitor",
      imageBackgroundColor: "midnightblue",
      backgroundColor: "#B3CCF5",
      image: require("../assets/images/busMonitor.png"),
      screen: "BusMonitor",
    },
    {
      id: 4,
      title: "I am an Institute",
      imageBackgroundColor: "white",
      fontWeight: "bold",
      image: require("../assets/images/tutLogo.png"),
    },
  ]);
  return (
    <FlatList
      numColumns={2}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Animatable.View animation="fadeIn" easing="ease-in" delay={2000}>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={{
              width: 150,
              backgroundColor: item.backgroundColor,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              margin: 15,
              padding: 15,
            }}
          >
            <View
              style={{
                backgroundColor: item.imageBackgroundColor,
                borderRadius: 50,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item.image} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Image
                source={require("../assets/images/tutLogo.png")}
                style={{ height: 20, width: 20 }}
              />
            </View>
          </TouchableOpacity>
        </Animatable.View>
      )}
    />
  );
};

export default UserTypes;

const styles = StyleSheet.create({});
