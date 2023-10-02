import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Explore = () => {
  return (
    <View style = {styles.container}>
      <Text>Welcome to the explore tab!</Text>
      <Button
        title = "Hey this is a button"
        onPress={() => alert("hey you clicked me!")}>
        </Button>
    </View>
  );
}
export default Explore;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})