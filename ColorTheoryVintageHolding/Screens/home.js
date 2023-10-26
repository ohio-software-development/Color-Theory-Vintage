import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Header } from "react-native-elements";
import ItemCard from "../component/ItemCard.js";
import { AppContext } from "../App.js";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from '@rneui/themed';
import { InitialApp, initializeApp } from "firebase/app"; // validate self
import { getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';

const Home = () => {
  const user = useContext(AppContext);

  const [url, setUrl] = useState();

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, "/download.jpg");
      await getDownloadURL(reference).then((x) => {

        setUrl(x);
      });
    };
    func();
  });

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
          <View style={feedStyles.rowContainer}>
            <ItemCard/>
          </View>
          <View style={feedStyles.rowContainer}>
            <ItemCard/>
          </View>
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

