import {Button, View, Text} from "react-native";

const Main = ({navigation}) => {
  return (
    <View>
      <Text>Главная страница</Text>
      <Button title="Контакты" onPress={()=>{navigation.navigate("Contacts", {
        id: 1,
        name: 'Alex'
      })}}/>
    </View>
  );
};

export default Main;
