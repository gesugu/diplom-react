// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {View, StyleSheet} from "react-native";
// import MainScreen from "./routes/MainScreen"
// import FirstScreen from "./routes/FirstScreen"
// import SecondScreen from "./routes/SecondScreen"
// import ThirdScreen from "./routes/ThirdScreen"

// const Stack = createNativeStackNavigator();

// //headerBackVisible: false чтобы убрать стрелку

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="MainScreen"
//           options={{
//             title: 'Main page',
//             headerStyle: {
//               backgroundColor: '#2098a8',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//           component={(props)=><View>
//             <MainScreen {...props}/>
//           </View>
//           }
//         />
//         <Stack.Screen
//           name="FirstScreen"
//           options={{
//             title: 'FirstScreen',
//             headerStyle: {
//               backgroundColor: '#2098a8',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//           component={(props)=><View>
//             <FirstScreen {...props}/>
//           </View>
//           }
//         />
//         <Stack.Screen
//           name="SecondScreen"
//           options={{
//             title: 'SecondScreen',
//             headerStyle: {
//               backgroundColor: '#2098a8',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//           component={(props)=><View>
//             <SecondScreen {...props}/>
//           </View>
//           }
//         />
//         <Stack.Screen
//           name="ThirdScreen"
//           options={{
//             title: 'ThirdScreen',
//             headerStyle: {
//               backgroundColor: '#2098a8',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//           component={(props)=><View>
//             <ThirdScreen {...props}/>
//           </View>
//           }
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }