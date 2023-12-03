import { useEffect, useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFirestore, collection, where, getDocs } from 'firebase/firestore';
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { query } from 'firebase/firestore';
const FollowersScreen = ({ route }) => {
    const { isLoadingFollowers } = route.params;
    const { user } = useContext(AppContext);
    const [followNames, setfollowNames] = useState(null);
    const db = getFirestore();
    const navigation = useNavigation(); 
    console.log("who am I following?")
    console.log(user.followers)
//   useEffect(() => {
//     const fetchfollowNames = async () => {
//       const userRef = collection(db, "Users");
//       const querySnapshot = await getDocs(
//         where(userRef, "name", "in", loadType)
//       );

//       const names = querySnapshot.docs.map((doc) => doc.data().name);
//       setfollowNames(names);
//     };

//     fetchfollowNames();
//   }, [db, loadType]);
  const getUserID = (name) => {
    const IDs = []
    const usersRef = collection(db, "Users");
    const q = query(usersRef, where("name" , "==", name));
    const snapShot = getDocs(q);
    console.log(snapShot);
    snapShot.forEach((doc) => {
      IDs.push(doc.data());
    })
    console.log(IDs);
    return IDs[0]; 
  }
    useEffect(() => {
        if(followNames == null){
            setfollowNames(isLoadingFollowers ? user.followers : user.following);
        }
        console.log("here are the follower names");
        console.log(followNames);
    }, [])
    const createJSX = () => {
        return (
            followNames.map((name) => {
              return(
                <TouchableOpacity onPress={() => {
                  const userID = getUserID(name)
                   navigation.push("ProfileScreen") 
                }}>
                  <View style={styles.followerItem}>
                      <Text style={styles.username} key={name}>{name}</Text>

                  </View>

                </TouchableOpacity>
              ) 
            })
        )
    }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.header}>
          {isLoadingFollowers ? "Followers" : "Following"}
        </Text>
        {followNames==null ? <Text>i</Text> : createJSX()}
        {/* <FlatList
          data={followNames}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.followerItem}>
              <Text>{item}</Text>
            </View>
          )}
        /> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  followerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default FollowersScreen;
