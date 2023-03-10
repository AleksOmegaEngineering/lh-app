import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Users(props){
    useEffect(() =>{
    }, [])
    return(
        <View style= {[styles.usersMainContainer, props.style]}>
            <Text style = {styles.dummyText}>
                
            </Text>
        </View>
    );

}


const styles = StyleSheet.create({
    usersMainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "gray"
    },
    dummyText: {
        borderColor: "red",
        borderRadius: 1,
    },
    scrollable:{

    },
})