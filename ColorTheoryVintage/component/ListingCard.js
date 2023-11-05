import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "../App.js";

// var width = Dimensions.get('window').width; //full width
const ListingCard = ({listing, listingURL}) => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext); 
  const ListingCardComponent = () => (
      <Pressable onPress={() => navigation.push("ListingScreen", { listing, listingURL })}>
        <View style={styles.padding}>
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

const styles = StyleSheet.create({
image: {
    borderRadius: 25,
    width: 150,
    height:150,
},
padding:{
  paddingBottom:10,
}

});

export default ListingCard;