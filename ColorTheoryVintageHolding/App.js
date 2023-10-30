import React, {createContext, useState} from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MyTabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ItemScreen from "./Screens/itemScreen";
import User from "./classes/User.js";
import Item from "./classes/Item.js";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Red_gem_earings = require("./assets/earings.webp")
const profile_picture = require("./assets/cat.jpeg");
import firebaseConfig from "./firebaseconfig";
import { InitialApp, initializeApp } from "firebase/app"; // validate self
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import Login from "./Screens/Login";
import SignUp from "./Screens/signUp";
import { decode } from 'base-64';
if(typeof atob === 'undefined') {
  global.atob = decode;
}

//Create a User and add an Item
let testUser = new User("Owen Turnbull", "Hi my name is Owen", ["Liam Lock", "Illenium"], ["Michael Bay", "Owen Turnbull"], profile_picture);
let testItem = new Item(Red_gem_earings, 1050, "6mm", "Cartier", "Vintage earings for sale!", "earings", "Used");
testUser.addItem(testItem);

//Used to pass User object
export const AppContext = createContext();

const MyTheme = {colors: {...DefaultTheme.colors,background: 'white'},};
initializeApp(firebaseConfig);
const Stack = createStackNavigator();
function AuthScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login_screen" component={Login} />
      <Stack.Screen name="signUp_screen" component={SignUp} />
    </Stack.Navigator>
  );
}
const App = () => {
  const [user, setUser] = useState(testUser);
  
  return (
    <SafeAreaProvider>
      <AppContext.Provider value={{user, setUser}}>
        <NavigationContainer theme={MyTheme}>
         <MyTabs />
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaProvider>

  );
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
