import React from 'react';
import {Button, View, Text, FlatList, StyleSheet, TextInput} from "react-native";
import classes from './MyLoader.module.css'

const MyLoader = () => {
    return (
        <View style={styles.loader}></View>
    );
};

const styles = StyleSheet.create({
    loader: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "3px",
        animation: "rotate",
    },
})

export default MyLoader;