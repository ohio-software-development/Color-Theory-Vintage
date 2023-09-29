import React, {createContext, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyScreens from "./navigation/screens";
import { createStackNavigator } from "@react-navigation/stack";
import ItemScreen from "./Screens/itemScreen";
import User from "./classes/User.js";
import Item from "./classes/Item.js";

const spongebob_picture = require("./assets/spongebob.webp");

let testUser = new User("Jay Lo", "Hi my name is Owen", ["Liam Lock", "Illenium"], ["Michael Bay", "Owen Turnbull"]);
let testItem = new Item(spongebob_picture, "50", "L", "Nike");
testUser.addItem(testItem);

export const AppContext = createContext();
const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(testUser)
  return (
    <AppContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <MyScreens/>
      </NavigationContainer>
    </AppContext.Provider>
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
