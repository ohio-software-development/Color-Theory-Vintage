import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search, Home, User, MessageCircle } from "react-native-feather";
import {HomeScreenNavigator,  searchScreenNavitgator, ProfileScreenNavigator, ExperimentScreenNavigator, HomeDrawerNavigator} from '../navigation/screenNavigation'


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {height: 80}}} >
        <Tab.Screen
          name="Home" 
          component={HomeDrawerNavigator}
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<Home color={"black"}/>)}}
        />
        <Tab.Screen 
          name="Search" 
          component={searchScreenNavitgator} 
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
          options={{tabBarLabel:() => {return null}, tabBarIcon: ({ color, size }) => (<MessageCircle color={"black"}/>)}}
        />
          
      </Tab.Navigator>
    
  );
}
export default MyTabs;
