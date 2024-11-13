import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, StyleSheet} from "react-native";
import MainScreen from "./routes/MainScreen"
import FirstScreen from "./routes/FirstScreen"
import SecondScreen from "./routes/SecondScreen"
import ThirdScreen from "./routes/ThirdScreen"
import CreateScreen from "./routes/CreateScreen"
import MainScreen2 from './routes/MainScreen2';
import UserOneScreen from './routes/UserOneScreen';
import { Provider } from 'react-redux';
import store from "./redux/store"

const Stack = createNativeStackNavigator();

//headerBackVisible: false чтобы убрать стрелку

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          options={{
            title: 'Main page',
            headerStyle: {
              backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <MainScreen {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="FirstScreen"
          options={{
            title: 'FirstScreen',
            headerStyle: {
              backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <FirstScreen {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="SecondScreen"
          options={{
            title: 'SecondScreen',
            headerStyle: {
              backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <SecondScreen {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="ThirdScreen"
          options={{
            title: 'ThirdScreen',
            headerStyle: {
              backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <ThirdScreen {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="CreateScreen"
          options={{
            title: 'CreateScreen',
            headerStyle: {
              backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <CreateScreen {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="MainScreen2"
          options={{
            title: 'MainScreen2',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <MainScreen2 {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="UserOneScreen"
          options={{
            title: 'UserOneScreen',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <UserOneScreen {...props}/>
          </View>
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}