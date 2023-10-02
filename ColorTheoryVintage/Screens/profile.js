import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const Profile = () => {
  return (
    <View style = {styles.container}>
      <Text>Welcome to the profile tab!</Text>
      <Button
        title = "Hey this is a button"
        onPress={() => alert("hey you clicked me!")}>
        </Button>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})