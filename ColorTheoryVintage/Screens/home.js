import React, { useContext, useEffect, useState } from "react";
import { useFetch, useAsync } from "react-async";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import {MessageCircle, Menu } from "react-native-feather";
import { Header } from "react-native-elements";
import ListingCard from "../component/ListingCard.js";
import { AppContext } from "../App.js";
import { ScrollView } from "react-native-gesture-handler";
import { InitialApp, initializeApp } from "firebase/app"; // validate self
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import { getFirestore, getDocs, collection, doc, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import GetPicture from "../api/getPicture.js";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

var width = Dimensions.get('window').width/2; //full width
const Home = () => {
  const user = useContext(AppContext);
  const navigation = useNavigation(); // Use useNavigation to get the navigation object
  const db = getFirestore();
  const storageRef = getStorage();
  const [listings, setListings] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);

  // useEffect(() => {
  //   if(imageURLS.length > 0) return;
  //   const fetchData = async () => {
  //     try {
  //       const listingRef = collection(db, "Listings");
  //       const q = query(listingRef, orderBy("price"), limit(3));
  //       const querySnapshot = await getDocs(q);
  //       /*
  //       old implimentation        
  //       const snapshot = await getDocs(collection(db, "Listings")).limit(10).catch(() => {console.log("error fetching data"); return});
  //       const listingData = snapshot.docs.map(doc => doc.data());
  //       */
  //       const listingData = querySnapshot.docs.map(doc => doc.data());

  //       setListings(listingData);
  //     } catch (error) {
  //       console.error("Error fetching listings:", error);
  //     }
      
  //   };
  //   fetchData();
  //   // let refs = []; 
  //   const fetchImage = async () => {
  //     try {
  //       for(let listing of listings){
  //         const response = await getDownloadURL(ref(storageRef, "/images/" + listing.imageRef));
  //         // refs.push(response);         
  //         setImageURLS(imageURLS => [...imageURLS, response]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching image:", error);
  //     }
  //   };
  //   fetchImage();
  //   // setImageURLS(refs);
  
  // }, [db, listings]);
  return (
    <View>
      <Header
        containerStyle={headerStyles.headerContainer}
        leftComponent={<Menu
              onPress={() => navigation.toggleDrawer()}
              title="Side Panel"/> }
        rightComponent={
         <MessageCircle
              onPress={() => navigation.navigate('ExperimentScreen')}
              title="Message"/> 
        }
        centerComponent={{
          text: "Color Theory Vintage!",
          style: headerStyles.headerText,
        }}
      />
      <View>
        <Text style={{fontSize: 24}}>Feed</Text>
      </View>
      <ScrollView>
        <View style={feedStyles.ColumnContainer}>
          {listings.map((listing, i) => {
            {/*create new row for every two columns and also make sure that there are at least two items */}
            if (i % 2 === 0 && listings[i + 1]) {
              return (
                <View style={feedStyles.rowContainer} key={i}>
                  <ListingCard styles={styles.images} listing={listings[i]} listingURL={imageURLS[i]} />
                  <ListingCard styles={styles.images} listing={listings[i + 1]} listingURL={imageURLS[i + 1]} />
                </View>
              );
            } else {
              return null; // Render nothing if there are no two consecutive listings available
            }
          })}
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
  images: {
    image: {
      borderRadius: 25,
      width: width,
      height: 200,
    },
    padding:{
      paddingBottom:10,
    }
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});