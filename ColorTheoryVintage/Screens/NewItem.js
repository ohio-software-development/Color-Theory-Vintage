import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, SafeAreaView, Alert } from 'react-native';
import addNewListing from '../api/addNewListing';
import StandardHeader from '../component/StandardHeader';
import GetPicture from '../api/getPicture';
import { Picker } from '@react-native-picker/picker';

const newItemCompleted = (data, photo) => {
  addNewListing(data, photo);
}

export default NewItem = () => {
  const [step, setStep] = useState(1); // Add step state

  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('necklace');
  const [condition, setCondition] = useState('new');
  const [photo, setPhoto] = useState();

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
        "brande": brand,
        "size": size,
        "price": price,
        "description": description,
      }
      newItemCompleted(data, photo)
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
            <Picker onValueChange={(itemValue) => setType(itemValue)}>
              <Picker.Item label="Necklace" value="necklace" />
              <Picker.Item label="Bracelet" value="bracelet" />
            </Picker>
            <Picker onValueChange={(itemValue) => setBrand(itemValue)}>
              <Picker.Item label="Gucci" value="prada" />
              <Picker.Item label="Prada" value="prada" />
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