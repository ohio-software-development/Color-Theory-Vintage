import { createStackNavigator } from "@react-navigation/stack";
import ItemScreen from "../Screens/ItemScreen";
import Home from "../Screens/home";
import Explore from "../Screens/explore";
import Profile from "../Screens/profile";
import UserScreen from "../Screens/UserScreen";

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
    </Stack.Navigator>
  )
}

export {ProfileScreenNavigator};