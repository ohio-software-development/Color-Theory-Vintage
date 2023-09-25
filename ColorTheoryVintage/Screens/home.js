import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
// import spongebob from "../assets/spongebob.webp";
import { Header } from "react-native-elements";

const Home = ({navigation}) => {
  return (
    <View >
      <Header 
        backgroundColor = "#DFE0E1"      
        leftComponent={{ icon: 'menu', color: 'black' }}
        centerComponent={{ text: '?COLOR THEORY?', style: { color: 'black' } }}
      />
      <View>
          <Text style={{fontSize: 35}}>Your Feed</Text>
      </View>
      <View style={feedStyles.ColumnContainer}>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/spongebob.webp")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/spongebob.webp")}
          />
        </View>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require("../assets/spongebob.webp")}
          />
          <Image 
            style={feedStyles.image}
            source={require("../assets/spongebob.webp")}
          />
        </View>
      </View>
    </View>
  );
}
export default Home;


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
    width: 200,
    height: 200,
  }
});


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

