import { createStackNavigator } from "@react-navigation/stack";

import ItemScreen from "../Screens/itemScreen";
import Home from "../Screens/Home";
import Explore from "../Screens/explore";
import Profile from "../Screens/Profile";
import UserScreen from "../Screens/UserScreen";

import NewItem from "../Screens/NewItem";


const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name = "homeScreen"
        component={Home}
      />
      <Stack.Screen 
        name = "ItemScreen"
        component={ItemScreen}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />
      <Stack.Screen
        name="NewItemScreen"
        component={NewItem}
        options={{
          tabBarStyle: { display: "none" },
        }}
        />
    </Stack.Navigator>
  )
}

export {HomeScreenNavigator};

const ExploreScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name = "ExploreScreen"
        component={Explore}
      />
      <Stack.Screen 
        name = "ItemScreen"
        component={ItemScreen}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />

      <Stack.Screen
        name="NewItemScreen"
        component={NewItem}
        options={{
          tabBarStyle: { display: "none" },
        }}
        />
    </Stack.Navigator>
  )
}

export {ExploreScreenNavigator};


const ProfileScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name = "ProfileScreen"
        component={Profile}
      />
      <Stack.Screen 
        name = "ItemScreen"
        component={ItemScreen}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />
      <Stack.Screen
        name="NewItemScreen"
        component={NewItem}
        options={{
          tabBarStyle: { display: "none" },
        }}
        />
    </Stack.Navigator>
  )
}

export {ProfileScreenNavigator};