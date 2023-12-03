import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchCard from '../component/SearchCard';
import { SafeAreaView } from 'react-native-safe-area-context';


const Search = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <View style = {{width:'100%'}}>
    <SearchCard/>
    </View>
      <Text>Here we can search for users, products, and more. Might also have this be more of instagram explore page type beat</Text>
    </SafeAreaView>
  );
}
export default Search;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})