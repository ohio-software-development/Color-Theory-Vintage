import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../App";
import getUser from '../api/getUser';
import User from '../classes/User';
const Login = () => {
    const navigation = useNavigation();
    const {user, setUser} = useContext(AppContext);
    const auth = getAuth()
    //ows8turnbull@gmail.com
    const [email, setEmail] = useState("bp309420@ohio.edu");
    //123456
    const [password, setPassword] = useState("1234567");
    const onPressLogin = async () => {
        let userId = ""
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userId = userCredential.user.uid
            })
            .catch((error) => console.log(error));
        let userData = await getUser(userId).catch((error) => console.log(error))
        setUser(new User(userData.name,userId, userData.listings))
    };
    if(email && password){onPressLogin()}
    const onPressForgotPassword = () => {
    // Do something about forgot password operation
    };
    const onPressSignUp = () => {
        navigation.navigate("signUp_screen");
    };
    return (
    <View style={styles.container}>
        <Text style={styles.title}> Login Screen</Text>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={setEmail}/>
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={setPassword}
            />
        </View>
        <TouchableOpacity
            onPress = {onPressForgotPassword}>
            <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {onPressLogin}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Signup</Text>
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"80%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
});
export default Login;