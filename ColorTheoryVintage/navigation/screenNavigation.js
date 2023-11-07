import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../Screens/ListingScreen";
import Home from "../Screens/home";
import Explore from "../Screens/explore";
import Profile from "../Screens/profile";
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
        name = "ListingScreen"
        component={ListingScreen}
        rout
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />
      <Stack.Screen
        name="NewListingScreen"
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
        name = "ListingScreen"
        component={ListingScreen}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />

      <Stack.Screen
        name="NewListingScreen"
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
        name = "ListingScreen"
        component={ListingScreen}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />
      <Stack.Screen
        name="NewListingScreen"
        component={NewItem}
        options={{
          tabBarStyle: { display: "none" },
        }}
        />
    </Stack.Navigator>
  )
}

export {ProfileScreenNavigator};