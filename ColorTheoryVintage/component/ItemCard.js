import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements";


const itemStack = createStackNavigator();

const ItemCard = ({ srcImage, price = "Variable", size = "No Size", brand = "Unknown Brand", navigation }) => {
    const itemCard = 
        <Pressable onPress={() => alert("hello!")}>
            <View>
                <Image
                    style = {styles.image}
                    source={srcImage}
                />
                <Text>{size}</Text>
                <Text>{brand}</Text>
            </View>
        </Pressable>
    return itemCard
}

const styles = StyleSheet.create({
image: {
    width: 200,
    height: 200
}

});

export default ItemCard;