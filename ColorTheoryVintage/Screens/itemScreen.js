import { useNavigation } from '@react-navigation/native';
import React, { useContext } from "react";
import { AppContext } from "../App.js";
import { StyleSheet, Text, View, Image, Pressable, Button} from 'react-native';

const ItemScreen = () => {
    const navigation = useNavigation();
    const {user, setUser} = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text>hello</Text>
            <Text>{user.bio}</Text>
        <Button
            title = "Go Back"
            onPress={() => navigation.goBack()}>
        </Button>
        <Button
            title = "Create another page"
            onPress={() => navigation.push("ItemScreen")}>
        </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  })

export default ItemScreen;