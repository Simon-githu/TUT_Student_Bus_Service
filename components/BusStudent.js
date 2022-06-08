//import liraries
import { Picker } from "@react-native-picker/picker";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  onSnapshot,
  increment,
  updateDoc,
} from "firebase/firestore";
import moment from "moment";
import * as Animatable from "react-native-animatable";
import { auth, db } from "../firebaseConfig";

import redBg from "../assets/images/redBg.png";
import Logo from "../assets/images/tutLogo.png";
// create a component
const BusStudent = () => {
  const [campusFrom, setCampusFrom] = useState();
  const [campusTo, setCampusTo] = useState();
  const [data, setData] = useState();
  const [booked, setBooked] = useState(false);
  const [bookedData, setBookedData] = useState();
  const [time, setTime] = useState(null);
  const Search = async () => {
    let campus = campusFrom + "-" + campusTo;
    onSnapshot(collection(db, "Buses", campus, "Bus"), (doc) => {
      let array = [];
      doc.docs.map((doc) => {
        let sits = doc.data().Booked_Sits;
        let avail = 62 - sits;
        array.push({
          id: doc.id,
          Booked: doc.data().Booked_Sits,
          Campus: doc.data().Name,
          Available: avail,
        });
      });
      setData(array);
    });
  };

  const Book = async (time, campus) => {
    // Generate code function called
    let code = generateCode(5);
    let data = {
      StudentId: auth.currentUser.uid,
      StudentCode: code,
      StudentCampuses: campus,
      StudentBusTime: time,
    };
    // Creating a table(collection) for student who booked a sit
    const studentDoc = doc(
      db,
      "Buses",
      campus,
      "Bus",
      time,
      "Booked_Students",
      auth.currentUser.uid
    );
    // Inserting data in the table(collection)
    await setDoc(studentDoc, data);

    // Updating the booked sits when student books a sit
    const BookedStudent = doc(db, "Buses", campus, "Bus", time);
    // Atomically increment the booked_sits of the bus by 1.
    await updateDoc(BookedStudent, {
      Booked_Sits: increment(1),
    });

    // updating student data
    const UpdateStudent = doc(db, "users", auth.currentUser.uid);
    await updateDoc(UpdateStudent, {
      Status: "Booked",
      Code: code,
      Time: time,
      CampusSelected: campus,
    });
  };
  const generateCode = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    // Checking for changes onstudent status
    onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
      if (doc.data().Status === "Booked") {
        setBookedData(doc.data());
        setBooked(true);
      } else if (doc.data().Status === null) {
        setBooked(false);
      }
    });
  }, []);
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerData}>
            <View style={{ width: 200 }}>
              <Text style={{ fontWeight: "bold", top: 5, right: 10 }}>
                From
              </Text>
              <Picker
                selectedValue={campusFrom}
                onValueChange={(itemValue, itemIndex) =>
                  setCampusFrom(itemValue)
                }
              >
                <Picker.Item
                  label="Select Campus "
                  value="Select Campus"
                  style={{ color: "grey" }}
                />
                <Picker.Item label="Arcadia" value="Arcadia" color="red" />
                <Picker.Item label="Arts" value="Arts" color="red" />
                <Picker.Item label="Pretoria" value="Pretoria" color="red" />
                <Picker.Item
                  label="Ga-Rankuwa"
                  value="Ga-Rankuwa"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve South"
                  value="SoshSouth"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve North"
                  value="SoshNorth"
                  color="red"
                />
                <Picker.Item
                  label="eMalahleni"
                  value="eMalahleni"
                  color="red"
                />
                <Picker.Item label="Mbombela" value="Mbombela" color="red" />
                <Picker.Item label="Polokwane" value="Polokwane" color="red" />
              </Picker>
              <Text style={{ fontWeight: "bold", right: 10, top: 5 }}>To</Text>
              <Picker
                selectedValue={campusTo}
                onValueChange={(itemValue, itemIndex) => setCampusTo(itemValue)}
              >
                <Picker.Item
                  label="Select Campus"
                  value="Select Campus"
                  style={{ color: "grey" }}
                />
                <Picker.Item label="Arcadia" value="Arcadia" color="red" />
                <Picker.Item label="Arts" value="Arts" color="red" />
                <Picker.Item label="Pretoria" value="Pretoria" color="red" />
                <Picker.Item
                  label="Ga-Rankuwa"
                  value="Ga-Rankuwa"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve South"
                  value="SoshSouth"
                  color="red"
                />
                <Picker.Item
                  label="Soshanguve North"
                  value="SoshNorth"
                  color="red"
                />
                <Picker.Item
                  label="eMalahleni"
                  value="eMalahleni"
                  color="red"
                />
                <Picker.Item label="Mbombela" value="Mbombela" color="red" />
                <Picker.Item label="Polokwane" value="Polokwane" color="red" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.button} onPress={Search}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        {booked ? (
          <Animatable.View animation="fadeIn" easing="ease-in">
            <ImageBackground
              source={redBg}
              style={styles.topView}
              imageStyle={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: 200,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                    bottom: 10,
                  }}
                >
                  Ticket
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "yellow",
                    bottom: 10,
                    marginLeft: 20,
                  }}
                >
                  {bookedData.CampusSelected}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "yellow",
                    bottom: 10,
                    marginLeft: 20,
                  }}
                >
                  {bookedData.Time}
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "white",
                  alignSelf: "flex-end",
                  right: 40,
                  top: 15,
                }}
              >
                {bookedData.Code}
              </Text>
            </ImageBackground>
          </Animatable.View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.containerFlatlist}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 300,
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                  >
                    {item.Campus}
                  </Text>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
                  >
                    {item.id}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 300,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "white",
                      }}
                    >
                      <Text>Booked Sits:</Text>
                      {item.Booked}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "white",
                      }}
                    >
                      <Text>Available Sits:</Text>
                      {item.Available}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "white" }]}
                    onPress={() => Book(item.id, item.Campus)}
                    disabled={item.Booked == 62 ? true : false}
                  >
                    <Text style={{ color: "red", fontWeight: "bold" }}>
                      {item.Booked == 62 ? "Booked" : "Book"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}

        {data?.length === 0 && (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "red",
              alignSelf: "center",
              bottom: 250,
            }}
          >
            Bus Unavailable
          </Text>
        )}
      </View>
    </>
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
  containerFlatlist: {
    width: 350,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 10,
    margin: 5,
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
  topView: {
    width: 350,
    height: 150,
    alignItems: "flex-start",
    margin: 20,
    padding: 10,
  },
});

//make this component available to the app
export default BusStudent;
