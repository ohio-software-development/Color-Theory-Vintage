import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../Screens/explore";
import Home from "../Screens/home";
import Search from "../Screens/search";
import Profile from "../Screens/profile";
import ItemScreen from "../Screens/ItemScreen";
import {HomeScreenNavigator, ExploreScreenNavigator, ProfileScreenNavigator} from '/Users/owenturnbull/Documents/cs_projects/Color-Theory-Vintage/ColorTheoryVintage/navigation/screenNavigation'

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreenNavigator}/>
        <Tab.Screen name="Explore" component={ExploreScreenNavigator} />
        <Tab.Screen name="Profile" component={ProfileScreenNavigator} />
      </Tab.Navigator>
    
  );
}
export default MyTabs;
