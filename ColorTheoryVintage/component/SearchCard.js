import { SearchBar } from "react-native-elements";
import { StyleSheet, View } from 'react-native';
import React, { useState } from "react";

const SearchCard = ({ onChangeText }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (searchTerm) => {
    setSearch(searchTerm);
    onChangeText(searchTerm); // Pass the typed text back to the parent component
  };

  return (
    <View style={{ width: '100%' }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default SearchCard;
