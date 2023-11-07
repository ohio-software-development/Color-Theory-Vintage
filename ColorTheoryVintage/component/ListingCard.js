import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "../App.js";

const ListingCard = ({styles, listing, listingURL}) => {
  
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext); 

  const navigateToScreen = () => {
    // Use navigation.navigate to go to the desired screen
    navigation.navigate("ListingScreen", { listing, listingURL });
  }; // navigation.push("ListingScreen", { listing, listingURL }
  const ListingCardComponent = () => (
      <Pressable onPress={ () =>  navigation.navigate("ListingScreen", { listing, listingURL })}>
        <View>
          <Image
            style={styles.image}
            source={{uri : listingURL}}
          />
          {/* <Text>{currentItem.size}</Text>
          <Text>{currentItem.brand}</Text> */}
        </View>
      </Pressable>
    );
    return ListingCardComponent();
}

export default ListingCard;