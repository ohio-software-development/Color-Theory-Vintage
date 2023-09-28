import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements";




const ItemCard = ({item, navigation}) => {
    const ItemCardComponent = () => (
        <Pressable onPress={() => navigation.navigate("ItemScreen")}>
          <View>
            <Image
              style={styles.image}
              source={item.srcImage}
            />
            <Text>{item.size}</Text>
            <Text>{item.brand}</Text>
          </View>
        </Pressable>
      );
    return ItemCardComponent();
}

const styles = StyleSheet.create({
image: {
    width: 200,
    height: 200
}

});

export default ItemCard;