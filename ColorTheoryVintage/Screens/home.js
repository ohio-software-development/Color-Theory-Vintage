import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native';
import { Header } from "react-native-elements";
import ItemCard from "../component/ItemCard.js"
import {AppContext} from "../App.js";



const Home = ({navigation}) => {
  const user = useContext(AppContext);
  return (
    <View >
      <Header 
        containerStyle={headerStyles.headerContainer}
        leftComponent={{ icon: 'menu', color: headerStyles.menuIcon.color }}
        centerComponent={{ text: 'Color Theory Vintage!', style: headerStyles.headerText }}
      />
      <View>
          <Text style={{fontSize: 35}}>Your Feed</Text>
      </View>
      <View style={feedStyles.ColumnContainer}>

        <View style={feedStyles.rowContainer}>
          <ItemCard/>
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

export const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 0, // Removes the border at the bottom of the header
  },
  headerText: {
    color: 'black',
    fontSize: 20,
  },
  menuIcon: {
    color: 'black',
  },
});


