import {Button, View, Text, SectionList, StyleSheet, StatusBar} from "react-native";

const data = [
    {
        id: 1,
        title: 'cirru',
        data: ['ci', 'r'],
    },
    {
        id: 2,
        title: 'cirru',
        data: ['ci', 'r'],
    },
    {
        id: 3,
        title: 'cirru',
        data: ['ci', 'r'],
    },
    {
        id: 4,
        title: 'cirru',
        data: ['ci', 'r'],
    },
    {
        id: 5,
        title: 'cirru',
        data: ['ci', 'r'],
    },
]

const SecondScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
      <Button title="third screen" onPress={()=>{navigation.navigate("ThirdScreen", {
        id: 1,
        name: 'Alex'
      })}}/>

<SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.title}>{title}</Text>
            )}
        />
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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        maxHeight: "370px"
    },
    item: {
        backgroundColor: '#32bfce',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
})

export default SecondScreen;


// const SectionListComponent = () => (
//     <View style={styles.container}>
//         <SectionList
//             sections={DATA}
//             keyExtractor={(item, index) => item + index}
//             renderItem={({item}) => (
//                 <View style={styles.item}>
//                     <Text style={styles.title}>{item}</Text>
//                 </View>
//             )}
//             renderSectionHeader={({section: {title}}) => (
//                 <Text style={styles.header}>{title}</Text>
//             )}
//         />
//     </View>
// );