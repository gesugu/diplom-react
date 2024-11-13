import {React, useState, useEffect} from "react"
import {Button, View, Text, FlatList, StyleSheet, TextInput, Image} from "react-native";
import PostService from "../components/API/PostService"
import StoreSlicer from "../redux/StoreSlicer"
import {useDispatch, useSelector} from "react-redux";
import { addUserAction, removeUserAction, getUserAction, getUserInfoAction } from "../redux/StoreSlicer";
import UserList from "../components/UserList"
import UserForm from "../components/UserForm"

const FirstScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const usersStore = useSelector(state =>state.storeSlicer.users)

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [input, setInput] = useState('')

    const addUser = (first_name, last_name,  email) => {
        const user = {
            id: Date.now(),
            email: email,
            first_name: first_name,
            last_name: last_name,
            avatar: 'https://i.pinimg.com/736x/3e/a7/43/3ea7433e7ff51dc0e14c7a4b097665cc.jpg'
        }
        if(first_name && last_name && email){
            if(!email.includes('@')){
                alert('type a valid email')
                return
            }
            else{
                dispatch(addUserAction(user))
            }
        }
    }

    function removeUser(user_id){
        if(user_id){
            return dispatch(removeUserAction(user_id))
        }
    }

    const getInput = usersStore.filter(user => user.first_name.toLowerCase().includes(input.toLowerCase()))

    function getUserById(user_id){
        // const userOne = users.find((user) => user.id === user_id)
        // dispatch(getUserInfoAction(userOne))
        navigation.navigate("UserOneScreen", {user_id})
    }

    async function getUser() {
        const users = await PostService.getAll()
        dispatch(getUserAction(users))
        setIsLoading(false)
    }
    useEffect(()=>{
      getUser();
    }, [])
    return (
        <View style={styles.container}>
            <Text>Users</Text>
            <Button title="Second Screen" onPress={() => navigation.navigate("SecondScreen")} />
            <TextInput 
          placeholder="search"
          style={styles.input}
          value={input} 
          onChangeText={(input) => setInput(input)} 
        />
            
            {isLoading ? (
                <Text>Error occured</Text>
            ) : (
                <FlatList
                    data={getInput}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.first_name}</Text>
                            <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={item.avatar}
                            />
                            <Button onPress={() => getUserById(item.id)} title="get info"></Button>
                            <Button onPress={() => removeUser(item.id)} title="delete"></Button>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
            <TextInput 
          placeholder="type a first name"
          style={styles.input}
          value={first_name} 
          onChangeText={(first_name) => setFirstName(first_name)} 
        />
        <TextInput 
          placeholder="type a last name"
          style={styles.input}
          value={last_name} 
          onChangeText={(last_name) => setLastName(last_name)} 
        />
        <TextInput 
          placeholder="type an email" 
          style={styles.input}
          value={email} 
          onChangeText={(email) => setEmail(email)} 
        />
      <Button onPress={() => addUser(first_name, last_name, email)} title="create" style={styles.btn}></Button>
      {/* <FlatList
                    data={getInput}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.first_name}</Text>
                            <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={item.avatar}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                /> */}
        </View>
  );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#747474",
        padding: 20,
        color: "white",
    },
    text: {
        color: "red",
        fontSize: "25px",
    },
    loaderBlock: {
        width: "200px",
        height: "200px",
    },
    image: {
        width: 100,
        height: 150,
    },
    input:{
        fontSize: "20px",
        marginTop: "20px",
    },
    btn: {
        marginTop: "25px"
    }
})

export default FirstScreen;

//     <View>
//         <Text>First screen</Text>
    //   <Button title="second screen" onPress={()=>{navigation.navigate("SecondScreen", {
    //     id: 1,
    //     name: 'Alex'
    //   })}}/>
    //   <Text style={styles.text}>regitration page</Text>
    //   <TextInput
    //   placeholder="type a name"
    //   value={name}
    //   onChangeText = {(name) => setName(name)}
    //   />
//       <TextInput
//       placeholder="type a phone"
//       value={phone}
//       onChangeText = {(phone) => setPhone(phone)}
//       />
//       <TextInput
//       placeholder="type an email"
//       value={email}
//       onChangeText = {(email) => setEmail(email)}
//       />
    //   <Button title="submit" onPress={submitVerify}></Button>
    //   {submitted && (
    //     <View style={styles.container2}>
    //     <Text style={styles.text}>name - {name}</Text>
    //     <Text style={styles.text}>phone -{phone}</Text>
    //     <Text style={styles.text}>email - {email}</Text>
    //   </View>
    //   )}

{/* <FlatList
    data={data}
    renderItem={({item}) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )}
    keyExtractor={(item) => item.id}
    >
    </FlatList> 
     </View> */}