import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchCard from '../component/SearchCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const db = getFirestore();

  const handleSearch = async (searchTerm) => {
    try {
      setSearchText(searchTerm);
      const brandToSearch = searchTerm.trim().toLowerCase(); // Convert the search term to lowercase

      const querySnapshot = await getDocs(collection(db, 'Listings'));

      const results = [];
      querySnapshot.forEach((doc) => {
        const brand = doc.data().brand.toLowerCase(); // Convert the stored brand to lowercase for comparison
        if (brand.includes(brandToSearch)) {
          results.push(doc.data());
        }
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}>
        <SearchCard onChangeText={handleSearch} />
      </View>
      {searchResults.map((result, index) => (
        <Text key={index}>
          {result.brand && typeof result.brand === 'string' ? result.brand : 'Brand not available'}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
