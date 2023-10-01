import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "../App.js";


const ItemCard = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext);
  const currentItem = user.getCurrentItem();
  const ItemCardComponent = () => (
      <Pressable onPress={() => navigation.push("ItemScreen")}>
        <View>
          <Image
            style={styles.image}
            source={currentItem.srcImage}
          />
          <Text>{currentItem.size}</Text>
          <Text>{currentItem.brand}</Text>
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