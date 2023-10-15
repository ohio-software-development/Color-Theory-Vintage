import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, SafeAreaView, Alert } from 'react-native';
import handleNewListing from '../api/handlenewListing';
import StandardHeader from '../component/StandardHeader';
import GetPicture from '../api/getPicture';

export default NewItem = () => {
  const [step, setStep] = useState(1); // Add step state

  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('necklace');
  const [condition, setCondition] = useState('new');
  const [photo, setPhoto] = useState();

  const handleStep = () => {
    if (price && size && brand) {
      if(photo != undefined){
        console.log("hello")
        setStep(3);
      }
      else {
        setStep(2);
      }
    } else {
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
          <StandardHeader />
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>Enter some basic information about your item</Text>
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
                style={styles.textInput}
                placeholder="Brand"
                value={brand}
                onChangeText={setBrand}
                textAlign='center'
              />
            </View>
            <Button title={"Next"} onPress={handleStep} />
          </SafeAreaView>
        </View>
      );
    } else if (step === 2) {
      return (
            <GetPicture pictureState={photo} setPictureState={updatePhoto}></GetPicture>
      );
    } else if(step == 3) {
      console.log("we made it");
      return(
        <SafeAreaView>
          <Text>hello</Text>
        </SafeAreaView>
      );
    }
  };

  return display(step);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  header: {
    fontSize: 25,
    textAlign: "center",
    position: "absolute",
    top: 0
  }
});
