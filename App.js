import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import AppNavigation from '../livestream/live/AppNavigation';
import {
  ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

export default function App() {
  return (<NavigationContainer >
    <AppNavigation />
    <ZegoUIKitPrebuiltLiveStreamingFloatingMinimizedView />
  </NavigationContainer>);
}
// App.js

// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import RtcEngine, { AgoraView } from 'react-native-agora';
// import {
//   RtmClient,
//   RtmChannel,
// } from 'agora-react-native-rtm';

// const APP_ID = 'a2f2fe0520834d9ea27275f42a353457';
// const TOKEN = null; // Use a token if required by Agora
// const CHANNEL_NAME = 'test-channel';

// const App = () => {
//   // Agora RTC States
//   const [engine, setEngine] = useState(null);
//   const [joined, setJoined] = useState(false);

//   // Agora RTM States
//   const [rtmClient, setRtmClient] = useState(null);
//   const [rtmChannel, setRtmChannel] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   // Setup RTC Engine (Video Streaming)
//   useEffect(() => {
//     const setupRtcEngine = async () => {
//       const rtcEngine = await RtcEngine.create(APP_ID);
//       setEngine(rtcEngine);

//       rtcEngine.addListener('JoinChannelSuccess', () => {
//         console.log('Joined Channel Successfully');
//         setJoined(true);
//       });

//       rtcEngine.addListener('UserJoined', (uid) => {
//         console.log(`User joined: ${uid}`);
//       });

//       rtcEngine.addListener('UserOffline', (uid) => {
//         console.log(`User offline: ${uid}`);
//       });

//       await rtcEngine.enableVideo();
//       await rtcEngine.joinChannel(TOKEN, CHANNEL_NAME, null, 0);
//     };

//     setupRtcEngine();

//     return () => {
//       engine?.destroy();
//     };
//   }, []);

//   // Setup RTM Client (Chat)
//   useEffect(() => {
//     const setupRtmClient = async () => {
//       const rtm = await RtmClient.createInstance(APP_ID);
//       setRtmClient(rtm);

//       await rtm.login({ token: null, uid: 'User123' });

//       const channel = await rtm.createChannel(CHANNEL_NAME);
//       setRtmChannel(channel);

//       channel.on('ChannelMessageReceived', (msg, senderId) => {
//         setMessages((prev) => [...prev, { sender: senderId, message: msg.text }]);
//       });

//       await channel.join();
//     };

//     setupRtmClient();

//     return () => {
//       rtmChannel?.leave();
//       rtmClient?.logout();
//     };
//   }, []);

//   const sendMessage = async () => {
//     if (message.trim()) {
//       await rtmChannel.sendMessage({ text: message });
//       setMessages((prev) => [...prev, { sender: 'You', message }]);
//       setMessage('');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Video Stream */}
//       {joined ? (
//         <AgoraView style={styles.video} mode={1} showLocalVideo={true} />
//       ) : (
//         <Text style={styles.joiningText}>Joining Live Stream...</Text>
//       )}

//       {/* Chat Section */}
//       <View style={styles.chatContainer}>
//         <FlatList
//           data={messages}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <Text style={styles.messageText}>
//               {item.sender}: {item.message}
//             </Text>
//           )}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message"
//           value={message}
//           onChangeText={setMessage}
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   video: {
//     width: '100%',
//     height: '60%',
//   },
//   joiningText: {
//     textAlign: 'center',
//     marginVertical: 20,
//     fontSize: 18,
//   },
//   chatContainer: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   messageText: {
//     padding: 5,
//     fontSize: 16,
//   },
// });

// export default App;
