import React from "react";
import { useSelector } from "react-redux";
import {Button, View, Text, FlatList, StyleSheet, TextInput, Image} from "react-native";

const UserOneScreen = ({navigation, route}) => {
    const {user_id} = route.params
    const usersStore = useSelector(state =>state.storeSlicer.users)

    const currentUser = usersStore.find(user => user.id == Number(user_id));
    return(
        <View>
            {/* <Text>{currentUser.first_name - currentUser.last_name}</Text> */}
            <Text>{String(currentUser.email)}</Text>
            <Text>{String(currentUser.last_name)}</Text>
            <Button onPress={() => navigation.navigate("FirstScreen")} title="go back"></Button>
        </View>
    )
}

export default UserOneScreen;