import React, { useContext, useEffect, useState } from "react";
import { useFetch, useAsync } from "react-async";
import { StyleSheet, View, Image, Text } from "react-native";
import { Header } from "react-native-elements";
import ItemCard from "../component/ItemCard.js";
import { AppContext } from "../App.js";
import { ScrollView } from "react-native-gesture-handler";
import { InitialApp, initializeApp } from "firebase/app"; // validate self
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import GetPicture from "../api/getPicture.js";

const Home = () => {
  const user = useContext(AppContext);
  const db = getFirestore();
  const storageRef = getStorage();
  const [listings, setListings] = useState([]);
  const [imageUris, setImageUris] = useState([]);

  useEffect(() => {
    if(imageUris.length > 0) {return;}
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Items")).catch(() => console.log("error fetching data"));
        const listingData = snapshot.docs.map(doc => doc.data());
        setListings(listingData);
        console.log(listings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
      
    };
    fetchData();
    const fetchImage = async () => {
      try {
        for(let listing of listings){
          const response = await getDownloadURL(ref(storageRef, "/images/" + listing.image));
          setImageUris(imageUris => [...imageUris, response]);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  
  }, [db, listings]);
  return (
    <View>
      <Header
        containerStyle={headerStyles.headerContainer}
        leftComponent={{ icon: "menu", color: headerStyles.menuIcon.color }}
        centerComponent={{
          text: "Color Theory Vintage!",
          style: headerStyles.headerText,
        }}
      />
      <View>
        <Text h1>Feed</Text>
      </View>
      <ScrollView>
        <View style={feedStyles.ColumnContainer}>
          {imageUris.map((uri, index) => (
            <ItemCard listingImage={uri}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;


const feedStyles = StyleSheet.create({
  ColumnContainer: {
    flexDirection: "column",
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    width:100,
  },

});

export const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    borderBottomWidth: 0, // Removes the border at the bottom of the header
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
  menuIcon: {
    color: "black",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

