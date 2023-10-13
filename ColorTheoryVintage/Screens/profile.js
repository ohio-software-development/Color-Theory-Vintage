import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "react-native-elements/dist/config";
import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white"}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Image
          style={{
            height: 60,
            width: 60,
            backgroundColor: "grey",
            borderRadius: 50,
          }}
          source={require("../assets/favicon.png")}
        ></Image>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 13,
            }}
          >
            9
          </Text>
          <Text style={{ fontSize: 20, color: "grey", paddingLeft: 10 }}>
            Posts
          </Text>
        </View>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 25,
            }}
          >
            28
          </Text>
          <Text style={{ fontSize: 20, color: "grey", paddingLeft: 10 }}>
            Followers
          </Text>
        </View>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 25,
            }}
          >
            12
          </Text>
          <Text style={{ fontSize: 20, color: "grey", paddingLeft: 10 }}>
            Following
          </Text>
        </View>
      </View>
      <Text
        style={styles.title}
      >
        BP-2
      </Text>
      <Text style= {styles.description}>
        Welcome to my shop
      </Text>
      <Text style= {styles.title}>
        Gallery
      </Text>
      <View style = {{borderWidth: StyleSheet.hairlineWidth, borderColor: 'black'}}/>
      <ScrollView style={feedStyles.ColumnContainer}>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
          </View>
          <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
        </View>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
        </View>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/j-logo.jpeg")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "black",
    paddingHorizontal: 10,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "black",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  }
});

const feedStyles = StyleSheet.create({
  ColumnContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 35,
    color: 'black',
  },
  image: {
    width: '50%',
    borderWidth: 1,
    borderColor: "white",
    height: 210,
  }
});



