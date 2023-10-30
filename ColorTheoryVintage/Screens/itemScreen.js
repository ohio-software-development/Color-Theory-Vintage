import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StandardHeader from '../component/StandardHeader.js';
import { AppContext } from "../App.js";


const ItemScreen = () => {
    const navigation = useNavigation();
    const {user, setUser} = useContext(AppContext);
    const item = user.getCurrentItem();
    return (
        <View style={styles.container}>
            <StandardHeader/>
            <Image
                style = {styles.image} 
                source={item.srcImage}
            />
            <View style={styles.overview}>
                <Text style={styles.overviewContent}>{item.brand + " ∙ " + item.catagory}</Text>
                <Text style={styles.overviewSubContent}>{"Size " + item.size + " ∙ " + item.condition}</Text>
            </View>
                <Pressable style={styles.userInformationDiv} onPress={() => navigation.navigate("UserScreen")} >
                    <Image
                        source={user.profile_picture}
                        style={styles.userProfilePicture}
                    />
                    <Text style={styles.userInformationContent}>{user.name}</Text>
                </Pressable>
                <View style={styles.descriptionContainer}>
                    <Text style={{fontWeight: "bold", marginLeft: 10}}>{user.name}</Text>
                    <Text style ={{marginLeft: 5}}>{item.description}</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
    },
    overview:{
        bottom: 0,
        justifyContent: 'space-between',
        width:'100%',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth:0,
        borderStyle: "solid",
        borderBlockColor: "grey"
    },
    overviewContent:{
        fontSize: 30,
    },
    overviewSubContent:{
        fontSize: 15,
        color: "grey",
    },
    userInformationDiv: {
        flexDirection: "row",
        marginTop: 10,
        bottom: 0,
        alignItems: "center",
        
        width:'100%',
    },
    userInformationContent: {
        marginLeft: 15,
        fontSize: 15,

    },
    userProfilePicture:{
        marginLeft: 15,
        width:35,
        height:35,
        borderRadius: 100,
    },
    descriptionContainer: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        borderLeftWidth:0,
        borderRightWidth:0,
        
    },
    image:{
        width: '100%',
        height: 415
    }
  })

export default ItemScreen;