import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search, Home, User } from "react-native-feather";
import { Ionicons } from '@expo/vector-icons'
import {HomeScreenNavigator, ExploreScreenNavigator, ProfileScreenNavigator, ExperimentScreenNavigator} from '../navigation/screenNavigation'


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {height: 80}}} >
        <Tab.Screen
          name="Home" 
          component={HomeScreenNavigator}
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<Home color={"black"}/>)}}
        />
        <Tab.Screen 
          name="Explore" 
          component={ExploreScreenNavigator} 
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<Search color={"black"}/>)}}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreenNavigator} 
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<User color={"black"}/>)}}
        />
        <Tab.Screen
          name = "Experimental"
          component={ExperimentScreenNavigator}
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<Search color={"black"}/>)}}
        />
          
      </Tab.Navigator>
    
  );
}
export default MyTabs;
