import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, StyleSheet} from "react-native";
import Main from "./screens/Main";
import Contacts from "./screens/Contacts";

const Stack = createNativeStackNavigator();

//headerBackVisible: false чтобы убрать стрелку

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{
            title: 'Главная',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Main {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="Contacts"
          options={{
            title: 'Контакты',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Contacts {...props}/>
          </View>
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})