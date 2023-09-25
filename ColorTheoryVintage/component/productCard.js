import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements";


export default function productCard({srcImage, price, size, brand}){
    return (
        <View>
            {/* <Image>
                source = {require({srcImage})}
            </Image> */}
            <Text>{size}</Text>
            <Text>{brand}</Text>
        </View>
    )   
}