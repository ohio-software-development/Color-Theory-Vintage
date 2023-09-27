import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native';
// import spongebob from "../assets/spongebob.webp";
import { Header } from "react-native-elements";
import ItemCard from "/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/component/ItemCard.js"
import Item from "/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/classes/Item.js";

import User from "/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/classes/User.js";

const spongebob_picture = require("../assets/spongebob.webp");

let testUser = new User("Jay Lo", "Hi my name is Jay Lo", [] ,["Liam Lock", "Illenium"], ["Michael Bay", "Owen Turnbull"]);
let testItem = new Item(spongebob_picture, "50", "L", "Nike");
testUser.addItem(testItem);
current_item = testUser.getNextItem();

console.log(testUser.displayInfo());

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
          <ItemCard
            srcImage={current_item.srcImage}
            price = {current_item.price}
            size = {current_item.size}
            brand = {current_item.brand}
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

