import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../Screens/explore";
import Home from "../Screens/home";
import Search from "../Screens/search";
import Profile from "../Screens/profile";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );
}
export default MyTabs;
