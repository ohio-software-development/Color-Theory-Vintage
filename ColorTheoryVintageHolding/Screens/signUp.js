import React, { useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StandardHeader from "../component/StandardHeader";
import { AppContext } from "../App";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import User from "../classes/User";
// import {
//   auth,
//   createUserWithEmailAndPassword,
// } from "../firebase/firebase-utilities";

const SignUp = () => {
  const {user, setUser} = useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [RePassword, setRePassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSignUp = () => {
    const auth = getAuth()
    const db = getFirestore();
    console.log("check")
    console.log(email)
    console.log(password)
    if (password != RePassword) {
        Alert.alert("Password Do not match, please try again");
        } else {
        //dispatch(setLoading(true));
        console.log("isLoading");
          try {
            createUserWithEmailAndPassword(auth, email, password)
              .then(async (userCredential) => {
                const colRef = doc(db, "Users", userCredential.user.uid);
                setDoc(colRef, {
                  name: name,
                  bio: "",
                  followers: 0,
                  following: 0,
                  profile_picture: null
                })
                .then((snapshot) => {
                  console.log("uploaded User");
                  //setUser(User(name))
                  setUser("test")
                })
                .catch(() => console.log("error"));

                // // Signed in
                // const user = userCredential.user;
                // const docRef = await addDoc(collection(db, "users"), {
                //   name: name,
                //   email: email,
                //   password: password,
                // });
                // console.log("Document written with ID: ", docRef.id);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
              });
          } catch (error) {
            console.error("Error", error);
            //dispatch(setLoading(false));
            console.log("isNotLoading")
          }
        }
  };

  return (
    <View style={styles.container}>
      <StandardHeader />
        <Text style={styles.SignUpLabel}>SignUp</Text>

      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={"#ffffff"}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#ffffff"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#ffffff"}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Retype Password"
          placeholderTextColor={"#ffffff"}
          secureTextEntry
          value={RePassword}
          onChangeText={setRePassword}
        />
      </View>

      <View style={styles.container2}>
        <Button title="SignUp" onPress={handleSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "10%",
    // backgroundColor: "red",
  },
  container2: {
    marginTop: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
  },
  SignUpLabel: {
    fontSize: 50,
    marginTop: 20,
    marginBottom: 165,
    color: "#224957",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#224957",
    fontSize: 18,
    color: "#ffffff",
  },
  forgotPassword: {
    marginTop: 16,
    color: "#555",
    textDecorationLine: "underline",
  },
  Button: {
    marginTop: 100,
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;