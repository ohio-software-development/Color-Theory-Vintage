import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const Search = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text>Welcome to the search tab!</Text>
      <Button
        title = "Hey this is a button"
        onPress={() => alert("hey you clicked me!")}>
        </Button>
    </View>
  );
}
export default Search;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})