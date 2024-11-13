import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import CreateScreen from './CreateScreen';
import PostService from '../components/API/PostService';

const Stack = createStackNavigator();

const MainScreen2 = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const users = await PostService.getAll();
            setUsers(users);
            setIsLoading(false);
        };
        getUser();
    }, []);

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstScreen">
                    {(props) => <FirstScreen {...props} users={users} isLoading={isLoading} />}
                </Stack.Screen>
                <Stack.Screen name="CreateScreen">
                    {(props) => <CreateScreen {...props} addUser={addUser} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainScreen2;