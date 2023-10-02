import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StandardHeader from '../component/StandardHeader';

const UserScreen = () => {
  return (
    <View style = {styles.container}>
        <StandardHeader/>
        <Text>Welcome to the User tab!</Text>
        <Button
            title = "Hey this is a button"
            onPress={() => alert("hey you clicked me!")}>
        </Button>
    </View>
  );
}
export default UserScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})