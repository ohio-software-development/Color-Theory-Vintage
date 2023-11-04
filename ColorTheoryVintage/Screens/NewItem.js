import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, SafeAreaView, Alert } from 'react-native';
import StandardHeader from '../component/StandardHeader';
import GetPicture from '../api/getPicture';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';
import { useContext } from 'react';
import { AppContext } from '../App';
import { getFirestore,  collection, addDoc, setDoc, doc, arrayUnion, updateDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { uploadString } from "firebase/storage";
import {v4} from "uuid";



export default NewItem = () => {
  const navigation = useNavigation();
  const {user, setUser} = useContext(AppContext);
  const [step, setStep] = useState(1); // Add step state
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('necklace');
  const [condition, setCondition] = useState('new');
  const [photo, setPhoto] = useState();

  addNewListing = async (data, photo) => {
    // userRef.update({
    //     listings: arrayUnion(listingId)
    // })
    // .then((snapshot) => {
    //     console.log("uploaded item to user");
    // })
    // .catch(() => console.log("error"))
  
    
    // const colRef = collection(db, "Items");
    // addDoc(colRef, data).then((snapshot) => {
    //     console.log("uploaded item");
    // }).catch(() => console.log("error"));
  
  
    const metadata = {
        contentType: 'image/jpeg',
        firebaseStorageDownloadTokens: v4() //In this line you are adding the access token
      };
    
    const storage = getStorage();
    const storageRef = ref(storage, "/images/brady" + v4() + ".jpeg");
    console.log(photo.uri);
    const response = await fetch(photo.uri)
    const bytes = await response.blob();
    await uploadBytesResumable(storageRef, bytes, metadata).then((snapshot) =>{
      data["imageRef"] = snapshot.ref.name;
        alert("image uploaded");
    })
    console.log(Object.keys(photo))
    const db = getFirestore();
    const listingId = v4();
    await setDoc(doc(db, "Listings", listingId), data)
        .then((snapshot) => {
            console.log("uploaded item");
        })
        .catch(() => console.log("error"))
    console.log("this is the user id")
    console.log(user.id)
    const userRef = doc(db, "Users", user.id);
    updateDoc(userRef, {
      listings: arrayUnion(listingId)
    })
  
  
    // const storage = getStorage();
    // const response = await fetch(photo.uri)
    // console.log("HIT");
    // const blob = await response.blob();
    // var storageRef = ref(storage, "/images/bradyNew" + v4() + ".jpeg");
    // alert("image uploaded");
    // return storageRef.put(blob)
  
    // console.log(photo.base64);
    // const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    // uploadString(storageRef, message2, "base64").then((snapshot) => {
    //     console.log("photo uploaded")
    // }).catch(() => console.log("error"));
  }

  const handleStep = () => {

    //if completed first step
    if(step == 1 && (type != undefined && brand != undefined)){
      setStep(2);
    }
    else if((step == 2) == (photo != undefined)){
      setStep(3)
    }
    else if((step == 3) && (price && size)){
      data = {
        "type": type,
        "brand": brand,
        "size": size,
        "price": price,
        "description": description,
      }
      addNewListing(data, photo)
      navigation.navigate("homeScreen");
    }
    else {
      alert("One of the following fields has not been completed");
    }

  };

  const updatePhoto = (newValue) => {
    setPhoto(newValue);
    handleStep();
  }

  const display = (step) => {
    if (step === 1) {
      return (
        <View style={styles.container}>
          <SafeAreaView>
            <Picker selectedValue={type}   onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
              <Picker.Item label="Necklace" value="necklace" />
              <Picker.Item label="Bracelet" value="bracelet" />
            </Picker>
            <Picker selectedValue={brand}   onValueChange={(itemValue, itemIndex) => setBrand(itemValue)}>
              <Picker.Item label="Gucci" value="prada" />
              <Picker.Item label="Prada" value="prada" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            <Button title={"Next"} onPress={handleStep} />
          </SafeAreaView>
        </View>
      );
    } else if (step === 2) {
      return (
            <GetPicture pictureState={photo} setPictureState={updatePhoto}></GetPicture>
      );
    } else if(step == 3) {
      return(
        <View style={styles.container}>
          <StandardHeader />
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>Finally, some basic information about your item</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Price"
                onChangeText={setPrice}
                keyboardType="numeric"
                returnKeyType="done"
                textAlign='center'
              />
              <TextInput
                style={styles.textInput}
                placeholder="Size"
                onChangeText={setSize}
                keyboardType="numeric"
                returnKeyType="done"
                value={size}
                textAlign='center'
              />
              <TextInput
                style={styles.descriptionInput}
                placeholder="Description"
                on ChangeText={setDescription}
                returnKeyType="done"
                multiline={true}
              />
            </View>
            <Button title={"Next"} onPress={handleStep} />
          </SafeAreaView>
        </View>
      );
    }

  };

  return display(step);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textInputContainer: {
    width: '80%',
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  descriptionInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
    height: 50
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    position: "absolute",
    top: 0
  }
});