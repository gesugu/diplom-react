import {React, useState} from "react"
import {Button, View, Text, FlatList, StyleSheet, TextInput} from "react-native";

const MainScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const submitVerify = () => {
        if(firstName && lastName && email){
          if(!email.includes('@')){
            alert('enter a valid email')
            return;
          }
          setSubmitted(true)
          navigation.navigate("FirstScreen", {
            firstName, lastName, email
          })
        }
    }
  return (
    <View style={styles.parent}>
      <Text>Main page</Text>
      {/* <Button title="first screen" onPress={()=>{navigation.navigate("FirstScreen")}}/> */}
      <Text style={styles.text}>Registration page</Text>
      <TextInput
      placeholder="type a first name"
      style={styles.input}
      value={firstName}
      onChangeText = {(firstName) => setFirstName(firstName)}
      />
      <TextInput
      placeholder="type a last name"
      style={styles.input}
      value={lastName}
      onChangeText = {(lastName) => setLastName(lastName)}
      />
      <TextInput
      placeholder="type an email"
      style={styles.input}
      value={email}
      onChangeText = {(email) => setEmail(email)}
      />
      <Button title="submit" onPress={submitVerify}></Button>
      {submitted && (
        <View style={styles.container2}>
        <Text style={styles.text}>first name - {firstName}</Text>
        <Text style={styles.text}>last name -{lastName}</Text>
        <Text style={styles.text}>email - {email}</Text>
      </View>
      )}
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
      color: "black",
      fontSize: "25px",
      fontWeight: "bold",
      marginLeft: "90px"
  },
  loaderBlock: {
      width: "200px",
      height: "200px",
  },
  input: {
    fontSize: "20px",
    marginTop: "20px",
  },
  parent: {
    backgroundColor: "#505050"
  },
})

export default MainScreen;
