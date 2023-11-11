import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, addDoc, orderBy, query, onSnapshot, getFirestore } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
//   const [messages, setMessages] = React.useState([]);
//   const [inputText, setInputText] = React.useState('');
//   const navigation = useNavigation();
//   const db = getFirestore();

//   useLayoutEffect(() => {
//     //change
//     const collectionRef = collection(db, "chats");
//     const q = query(db, ref => ref.orderBy('createdAt', 'desc'));
//     const unsubscribe = onSnapshot(q, snapshot => {
//         console.log("snapshot");
//         setMessages(
//             snapshot.docChanges.map(doc => ({
//                 _id: doc.id,
//                 createAt: doc.data().createdAt,
//                 text: doc.data().text,
//                 user: doc.data().user
//             }))
//         )
//     })
//     return () => unsubscribe();
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
//     const { _id, createdAt, text, user} = messages[0];
//     addDoc(colletion(db, 'chats'), {
//         _id,
//         createdAt,
//         text,
//         user,
//     });
//   }, []);
    const [messages, setMessages] = useState([])
  
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
    }, [])
  
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
//   const handleSend = () => {
//     if (inputText.trim() !== '') {
//       const newMessage = { id: messages.length + 1, text: inputText, sender: 'user' };
//       setMessages([...messages, newMessage]);
//       setInputText('');
//     }
//   };

//   const renderMessage = ({ item }) => (
//     <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.receiverMessage]}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id.toString()}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           value={inputText}
//           onChangeText={(text) => setInputText(text)}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#5cb85c',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#4285f4',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#4285f4',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
