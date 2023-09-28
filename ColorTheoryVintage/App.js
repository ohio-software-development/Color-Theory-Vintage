import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyScreens from "./navigation/screens";
import { createStackNavigator } from "@react-navigation/stack";
import ItemScreen from "./Screens/itemScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyScreens/>
    </NavigationContainer>
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
