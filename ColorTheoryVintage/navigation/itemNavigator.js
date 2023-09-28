import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/Screens/home";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//default theme for NavigationContainer???
//fixes problem with screen background not being white
const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

const ItemNavigator = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}

export default ItemNavigator;




/* 
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
*/