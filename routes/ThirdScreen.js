import {Button, View, Text, Image, StyleSheet} from "react-native";
import image from "../routes/image.jpg"

const images = [
    {
        id: 1,
        src: 'https://i.pinimg.com/736x/3e/a7/43/3ea7433e7ff51dc0e14c7a4b097665cc.jpg'
    }
]

const ThirdScreen = ({navigation}) => {
  return (
    <View>
      <Text>Third screen</Text>
      <Button title="main page" onPress={()=>{navigation.navigate("MainScreen")}}/>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://i.pinimg.com/736x/3e/a7/43/3ea7433e7ff51dc0e14c7a4b097665cc.jpg',
        }}
      />
       <Text>hjafcdh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150,
    }
})

export default ThirdScreen;
