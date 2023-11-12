import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../Screens/ListingScreen";
import Home from "../Screens/home";
import Explore from "../Screens/explore";
import Profile from "../Screens/profile";
import UserScreen from "../Screens/UserScreen";
import ExperimentScreen from "../Screens/experimentScreen";
import ChatScreen from "../Screens/Chat";

import NewItem from "../Screens/NewItem";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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


const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Color Theory Vintage" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="ListingScreen" component={ListingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExperimentScreen" component={ExperimentScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />

    </Drawer.Navigator>
  );
};
export { HomeDrawerNavigator };

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

const ExperimentScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExperimentScreen" component={ExperimentScreen} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
     
    </Stack.Navigator>
  );
};

export { ExperimentScreenNavigator };
