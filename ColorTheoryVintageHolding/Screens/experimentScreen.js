/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons8 from "../assets/icons8-message.gif";
import waitingMessage from "../assets/icons8-message-50.png";
const ExperimentScreen = () => {
  callsData = [
    {
      id: 1,
      name: "Mark Doe",
      date: "12 jan",
      time: "11:14 am",
      typing: true,
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 2,
      name: "Clark Man",
      date: "12 jul",
      time: "15:58 am",
      typing: true,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 3,
      name: "Jaden Boor",
      date: "12 aug",
      time: "12:45 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 4,
      name: "Srick Tree",
      date: "12 feb",
      time: "08:32 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "John Doe",
      date: "12 oct",
      time: "07:45 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 6,
      name: "John Doe",
      date: "12 jan",
      time: "09:54 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 8,
      name: "John Doe",
      date: "12 jul",
      time: "11:22 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 9,
      name: "John Doe",
      date: "12 aug",
      time: "13:33 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 10,
      name: "John Doe",
      date: "12 oct",
      time: "11:58 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 11,
      name: "John Doe",
      date: "12 jan",
      time: "09:28 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 12,
      name: "John Doe",
      date: "12 jan",
      time: "09:28 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 13,
      name: "John Doe",
      date: "12 jan",
      time: "09:28 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 14,
      name: "John Doe",
      date: "12 jan",
      time: "09:28 am",
      typing: false,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
  ];

  const [calls, setCalls] = useState(callsData);

  const renderItem = ({ item }) => {
    var callIcon = waitingMessage; ///"https://img.icons8.com/ios-filled/50/chat-message--v1.png"
    if (item.typing == true) {
      callIcon = icons8; //'https://img.icons8.com/color/48/000000/video-call.png'
    }
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginRight: 5, width: 14, height: 14 },
                ]}
                source={{
                  uri: "https://img.icons8.com/small/14/000000/double-tick.png",
                }}
              />
              <Text style={styles.time}>
                {item.date} {item.time}
              </Text>
            </View>
          </View>
          <Image style={[styles.icon, { marginRight: 50 }]} source={callIcon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          extraData={calls}
          data={calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={renderItem}
        />
      </SafeAreaView>
   
  );
};
export default ExperimentScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  end: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontWeight: "400",
    color: "#666",
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});
