import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "../App.js";

var width = Dimensions.get('window').width; //full width
const ItemCard = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext);
  const currentItem = user.getCurrentItem();
  const ItemCardComponent = () => (
      <Pressable onPress={() => navigation.push("ItemScreen")}>
        <View style={styles.padding}>
          <Image
            style={styles.image}
            source={currentItem.srcImage}
          />
          {/* <Text>{currentItem.size}</Text>
          <Text>{currentItem.brand}</Text> */}
        </View>
      </Pressable>
    );
    return ItemCardComponent();
}

const styles = StyleSheet.create({
image: {
    borderRadius: 25,
    width: width,
    height:200,
},
padding:{
  paddingBottom:10,
}

});

export default ItemCard;