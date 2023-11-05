import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { AppContext } from "../App";
import ListingCard from "../component/ListingCard";
import { getDownloadURL, getStorage, ref} from 'firebase/storage';
import { collection, getFirestore, getDoc, getDocs,doc } from "firebase/firestore";


const Profile = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext);
  const [imageURLS, setImageURLS] = useState([]);
  const db = getFirestore();
  const storageRef = getStorage();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (user.listings.length === 0) return;

    const fetchData = async () => {
      try {
        const updatedListings = [];
        for (let listing of user.listings) {
          const snapshot = await getDoc(doc(db, "Listings", listing));
          const reference = snapshot.data();
          updatedListings.push(reference);
        }
        setListings(updatedListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchData();
  }, [db, user.listings]);

  useEffect(() => {
    if (listings.length === 0) return;

    const fetchImage = async () => {
      try {
        const updatedImageURLS = [];
        for (let listing of listings) {
          const response = await getDownloadURL(ref(storageRef, "/images/" + listing.imageRef));
          updatedImageURLS.push(response);
        }
        setImageURLS(updatedImageURLS);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [listings]);

  // console.log("completed data fetch");
  // console.log(listings);
  // console.log(imageURLS);
  // console.log("these are the updated image urls");
  // console.log(imageURLS);
  return (
    <SafeAreaView style={{ backgroundColor: "white"}}>
    <ScrollView style={feedStyles.ColumnContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Image
          style={{
            height: 60,
            width: 60,
            backgroundColor: "grey",
            borderRadius: 50,
          }}
          source={require("../assets/favicon.png")}
        ></Image>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 12,
            }}
          >
            9
          </Text>
          <Text style={{ fontSize: 20, color: "grey", paddingLeft: 10 }}>
            Posts
          </Text>
        </View>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 12,
            }}
          >
            28
          </Text>
          <Text style={{ fontSize: 20, color: "grey"}}>
            Followers
          </Text>
        </View>
        <View style = {{marginLeft: 20}}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 20,
              color: "blue",
              paddingHorizontal: 16,
              marginLeft: 15,
            }}
          >
            12
          </Text>
          <Text style={{ fontSize: 20, color: "grey" }}>
            Following
          </Text>
        </View>
      </View>
      <Text
        style={styles.title}
      >
        BP-2
      </Text>
      <Text style= {styles.description}>
        Welcome to my shop
      </Text>

      <Text style= {styles.title}>
        Gallery
      </Text>
      <View style = {{borderWidth: StyleSheet.hairlineWidth, borderColor: 'black'}}/>
          {/* {listings.map((l, i) => (
            <ListingCard key={i} listing={l} listingURL={imageURLS[i]}/>
          ))} */}
          <Text>Hello?</Text>
      </ScrollView>
      <Button title="Create a new Listing" onPress={() => navigation.push("NewListingScreen")}/>

    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "black",
    paddingHorizontal: 10,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "black",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  }
});

const feedStyles = StyleSheet.create({
  ColumnContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 35,
    color: 'black',
  },
  image: {
    width: '50%',
    borderWidth: 1,
    borderColor: "white",
    height: 210,
  }
});



