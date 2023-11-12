import { useEffect, useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFirestore, collection, where, getDocs } from 'firebase/firestore';
import { AppContext } from '../App';

const FollowersScreen = ({ route }) => {
    const { isLoadingFollowers } = route.params;
    const { user } = useContext(AppContext);
    const [followNames, setfollowNames] = useState(null);
    const db = getFirestore();
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
                <View style={styles.followerItem}>
                    <Text style={styles.username} key={name}>{name}</Text>

                </View>
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
