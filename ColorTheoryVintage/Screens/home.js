import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from "react-native-elements";
import ItemCard from "../component/ItemCard.js"
import {AppContext} from "../App.js";
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
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
      <ScrollView>
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
      </ScrollView>
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
    width: '50%',
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

