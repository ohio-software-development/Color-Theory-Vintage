import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements";


export default function Home(){
  return (
    <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
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
            source={require('/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/assets/spongebob-x-king-ice-spongebob-squarepants-necklace-14k-gold-1-7-king-ice-30529288634543_360x.webp')}
          />
          <Image 
            style={feedStyles.image}
            source={require('/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/assets/spongebob-x-king-ice-spongebob-squarepants-necklace-14k-gold-1-7-king-ice-30529288634543_360x.webp')}
          />
        </View>
        <View style={feedStyles.rowContainer}>
          <Image 
            style={feedStyles.image}
            source={require('/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/assets/spongebob-x-king-ice-spongebob-squarepants-necklace-14k-gold-1-7-king-ice-30529288634543_360x.webp')}
            onClick
          />
          <Image 
            style={feedStyles.image}
            source={require('/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/assets/spongebob-x-king-ice-spongebob-squarepants-necklace-14k-gold-1-7-king-ice-30529288634543_360x.webp')}
          />
        </View>
      </View>
    </View>
  );
}



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


  