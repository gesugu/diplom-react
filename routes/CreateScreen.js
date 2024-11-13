import axios from 'axios';
import {React, useState} from 'react'
import {Button, View, Text, Image, StyleSheet, TextInput} from "react-native";

const CreateScreen = ({navigation, addUser}) => {
    const [firstName, setFirstName] = useState([])
    const [LastName, setLastName] = useState([])
    const [email, setEmail] = useState([])
    const [id, setId] = useState(1)
    const [avatar, setAvatar] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = async () => {
        if (!email.includes('@')) {
          alert("Name or Email is invalid");
          return;
        }
        setIsLoading(true)
        const response = await axios.post('https://reqres.in/api/users', {
            firstName,
            LastName,
            email,
        })
        if(response.status === 201){
            const newUser = {
                id: response.data.id,
                firstName: firstName,
                lastName: LastName,
                email: email,
                avatar: response.data.avatar,
            }
            addUser(newUser)
            navigation.navigate("FirstScreen")
        }
        else{
            throw new Error(404)
        }
    }
  return (
    <View>
      <Text>Create screen</Text>
      <Button title="first page" onPress={()=>{navigation.navigate("FirstScreen")}}/>
        {isLoading ? (
            <Text>Loading</Text>
        ) : (
            <>
            <TextInput
          value={firstName}
          placeholder='type a first name'
          onChangeText = {(firstName) => setFirstName(firstName)}
          />
          <TextInput
          value={LastName}
          placeholder='type a last name'
          onChangeText = {(lastName) => setLastName(lastName)}
          />
          <TextInput
          value={email}
          placeholder='type an email'
          onChangeText = {(email) => setEmail(email)}
          />
          <Text>{id}</Text>
          <Button title='submit' onPress={onSubmitFormHandler}></Button>
            </>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150,
    }
})

export default CreateScreen;
