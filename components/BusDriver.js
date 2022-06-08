//import liraries
import { Picker } from "@react-native-picker/picker";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

// create a component
const BusDriver= () => {
  const [campusFrom, setCampusFrom] = useState();
  const [campusTo, setCampusTo] = useState();
  const Search = async () => {
      let campus = campusFrom + "-" + campusTo;
      alert(campus); 
  };
  return (
 <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.containerData}>
          
            <View style={{width:200}}>
            <Text style={{ fontWeight: "bold",top:5,right:10 }}>From</Text>
            <Picker
                selectedValue={campusFrom}
                onValueChange={(itemValue, itemIndex) => setCampusFrom(itemValue)}
              >
                <Picker.Item
                  label="Select Campus "
                  value="Select Campus"
                  style={{ color: "grey" }}
                />
                <Picker.Item label="Arcadia" value="Arcadia" color="red"/>
                <Picker.Item label="Arts" value="Arts" color="red"/>
                <Picker.Item label="Pretoria" value="Pretoria" color="red"/>
                <Picker.Item label="Ga-Rankuwa" value="Ga-Rankuwa" color="red"/>
                <Picker.Item
                  label="Soshanguve South"
                  value="Soshanguve South"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve North"
                  value="Soshanguve North"
                  color="red"
                />
                <Picker.Item label="eMalahleni" value="eMalahleni" color="red"/>
                <Picker.Item label="Mbombela" value="Mbombela" color="red"/>
                <Picker.Item label="Polokwane" value="Polokwane" color="red"/>
              </Picker>
            <Text style={{ fontWeight: "bold",right:10,top:5 }}>To</Text>
              <Picker
                selectedValue={campusTo}
                onValueChange={(itemValue, itemIndex) => setCampusTo(itemValue)}
              >
                <Picker.Item
                  label="Select Campus"
                  value="Select Campus"
                  style={{ color: "grey" }}
                />
                <Picker.Item label="Arcadia" value="Arcadia" color="red"/>
                <Picker.Item label="Arts" value="Arts" color="red"/>
                <Picker.Item label="Pretoria" value="Pretoria" color="red"/>
                <Picker.Item label="Ga-Rankuwa" value="Ga-Rankuwa" color="red"/>
                <Picker.Item
                  label="Soshanguve South"
                  value="Soshanguve South"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve North"
                  value="Soshanguve North"
                  color="red"
                />
                <Picker.Item label="eMalahleni" value="eMalahleni" color="red"/>
                <Picker.Item label="Mbombela" value="Mbombela" color="red"/>
                <Picker.Item label="Polokwane" value="Polokwane" color="red"/>
              </Picker>
            </View>
            <TouchableOpacity style={styles.button} onPress={Search}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 10,
    margin: 50,
  },
  button: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    alignSelf: "center",
  },
  containerData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

//make this component available to the app
export default BusDriver;
