import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Keyboard, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import handleNewListing from '../api/handlenewListing';

const NewItemForm = () => {
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('necklace');
  const [condition, setCondition] = useState('new');

  const handleSubmit = () => {
    handleNewListing("test");
  };

  return (
    //WIPPP
    <View style={styles.container}>
      <SafeAreaView>
          <View>
            <TextInput
              style = {styles.textInput}
              placeholder="Price"
              onChangeText={setPrice}
              keyboardType="numeric"
              textAlign='center'
            />
            <TextInput
                style = {styles.textInput}
              placeholder="Size"
              value={size}
              onChangeText={setSize}
              textAlign='center'
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Brand"
              value={brand}
              onChangeText={setBrand}
              textAlign='center'
            />
            <TextInput
              style = {styles.textInput}
              placeholder="Short Description"
              value={description}
              onChangeText={setDescription}
              textAlign='center'
            />
          </View>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item label="Necklace" value="necklace" />
            <Picker.Item label="Ring" value="ring" />
            <Picker.Item label="Bracelet" value="bracelet" />
            <Picker.Item label="Earring" value="earring" />
          </Picker>
          <Picker
            selectedValue={condition}
            onValueChange={(itemValue, itemIndex) => setCondition(itemValue)}
          >
            <Picker.Item label="New" value="new" />
            <Picker.Item label="Used" value="used" />
          </Picker>
          <Button title="Submit" onPress={handleSubmit} />
      </SafeAreaView>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignitems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // marginBottom: 10,

  }


})

export default NewItemForm;