import { createStackNavigator } from "@react-navigation/stack";
import ItemScreen from "../Screens/itemScreen";
import MyTabs from "./tabs";

const Stack = createStackNavigator();

const MyScreens = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tabs" component={MyTabs}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
      </Stack.Navigator>
    
  );
}
export default MyScreens;
