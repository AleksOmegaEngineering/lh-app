import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Users from "./../screens/users.js"

export default function MainCC(props){
    let [scrollWidth, setScrollWidth] = useState();
    let [scrollHeight, setScrollHeight] = useState();
    useEffect(() =>{
        console.log(props.activeScreen);
    }, [props.activeScreen])
    return(
        <View style= {[styles.mainCC, props.style]}>
            <View style ={styles.informationContainer}>
                <ScrollView onLayout={(event) => { var {x, y, width, height} = event.nativeEvent.layout; setScrollHeight(height); setScrollWidth(width);}} style = {styles.scrollable}>
                     <Users style={styles.usersContainer}/>
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
        borderColor: "red",
        borderWidth: 2,
        // height: "100%",
        // width: "100%",
        // flex: 1
    },
})