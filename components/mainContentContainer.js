import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MainCC(props){
    return(
        <View style= {[styles.mainCC, props.style]}>
            <View style ={styles.informationContainer}>
                <ScrollView style = {styles.scrollable}>
                     
                </ScrollView>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    mainCC: {
        height:"80%",
        width: "100%",
        // backgroundColor: "red",
        zIndex: -3,
        // borderWidth: 10,
        // borderColor: "yellow",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    informationContainer: {
        height: "95%",
        width: "95%",
        backgroundColor: "white",
        borderRadius: "10%"
    },
    scrollable:{

    },
})