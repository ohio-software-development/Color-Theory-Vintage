import { SearchBar } from "react-native-elements";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react";

const SearchCard = () => {
  const [search, setSearch] = useState("");

  updateSearch = (searchTerm) => {
    setSearch(searchTerm);
    console.log(searchTerm);
  };

  return (
    <View style = {{width:'100%'}}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
  );
};

export default SearchCard;
