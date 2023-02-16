import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
// import {TouchableOpacity} from 'react-native-gesture-handler';
import { Animated, Button, Easing, Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { faUsers, faUser, faUserTie, faHouseChimney, faTriangleExclamation, faFlagCheckered, faCalculator, faGlobe} from '@fortawesome/free-solid-svg-icons/'


export default function Menu(props) {
  let [activeScreenLocal, setActiveScreenLocal] = useState("Users");
  let [prevActiveScreenLocal, setPrevActiveScreenLocal] = useState("");
  // replace the onPress function of the touchableOpacities with a function that takes in the same parameter ( what the active screen will be changed to ), that checks if the parameter is different from the current activeScreenLocal and if it is then changes the respective variable for color ( make this the second parameter for the new function for easier coding ) to white, changes the new respective variable for color to #C62E2D, changes the local variable, and then changes the passed down variable

  function camelize(string){
    let words = string.toLowerCase().split(" ");
    let finalWord = words[0];
    for(let i = 1; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
        finalWord = finalWord + words[i];
    }
    return finalWord;
  }
  const AnimatedMenu = () =>{

    let usersColor = useRef(new Animated.Value(0)).current;
    let clientsColor = useRef(new Animated.Value(0)).current;
    let propertiesColor = useRef(new Animated.Value(0)).current;
    let issuesColor = useRef(new Animated.Value(0)).current;
    let inspectionReportsColor = useRef(new Animated.Value(0)).current;
    let estimatesColor = useRef(new Animated.Value(0)).current;

    const fadeValue = props.fadeValue;
    const preLeft = props.preLeft;
    React.useEffect(() =>{
      // if(prevActiveScreenLocal != activeScreenLocal){
        let unanimateValue;
        let animatedValue;
        // console.log(`animatedValue = ${camelize(activeScreenLocal)}Color`)
        eval(`animatedValue = ${camelize(activeScreenLocal)}Color`);
        // console.log(animatedValue)
        Animated.timing(animatedValue,{
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: false
        }).start();
        // console.log(activeScreenLocal);
        props.setActiveScreen(activeScreenLocal);

        // setPrevActiveScreenLocal(activeScreenLocal);
      // }
    }, [activeScreenLocal])
    React.useEffect(() => {
      if(props.open){
        Animated.sequence([
          Animated.timing(fadeValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: false
          }),
          Animated.timing(preLeft, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false
          })
        ]).start();
        props.setFadeValue(fadeValue);
        props.setPreLeft(preLeft);
      }
      if(!props.open){
        Animated.sequence([
          Animated.timing(preLeft, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false
          }),
          Animated.timing(fadeValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false
          })
        ]).start();
        props.setFadeValue(fadeValue);
        props.setPreLeft(preLeft);
      }
    }, [props.open])
  
    const leftValue = preLeft.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '50%']
    });
    const usersColorValue = usersColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    const clientsColorValue = clientsColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    const propertiesColorValue = propertiesColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    const issuesColorValue = issuesColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    const inspectionReportValue = inspectionReportsColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    const estimatesColorValue = estimatesColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', '#C62E2D']
    });
    return(
      <Animated.View style={[styles.blackOut, {opacity: fadeValue}]}>
        <Animated.View style={[styles.mainMenuContainer, {left: leftValue}]}>
          <View style = {styles.optionsContainer}>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Users")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} icon={ faUsers } />
              </View>
              <View style={styles.optionText} >
                  <Animated.Text style={{textTransform: "uppercase", color: usersColorValue}}> Users </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Clients")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faUserTie } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Animated.Text style={{textTransform: "uppercase", color: clientsColorValue}}>Clients </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Properties")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faHouseChimney } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Animated.Text style={{textTransform: "uppercase", color: propertiesColorValue}}>Properties </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Issues")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faTriangleExclamation } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Animated.Text style={{textTransform: "uppercase", color: issuesColorValue}}>Issues </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Inspection Reports")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faFlagCheckered } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Animated.Text style={{textTransform: "uppercase", color: inspectionReportValue}}>Inspection Reports </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setActiveScreenLocal("Estimates")}} style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faCalculator } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Animated.Text style={{textTransform: "uppercase", color: estimatesColorValue}}>Estimates </Animated.Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faGlobe } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                  <Text style={{textTransform: "uppercase", color: "white"}}>EN </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.logoContainer}>
                <FontAwesomeIcon icon={ faGlobe } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
              </View>
              <View style={styles.optionText}>
                <Text style={{textTransform: "uppercase", color: "white"}}>ES </Text> 
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View> 
    )
  }

  return (
    <AnimatedMenu/>
  );
}

const styles = StyleSheet.create({
    blackOut:{
        position: "absolute",
        top: -100,
        left: 0,
        transform: [{translateX: -45}],
        height: "1800%",
        width: "120%",
        backgroundColor: "rgba(0, 0, 0, 0.81)",
        zIndex: 4,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    mainMenuContainer:{
        height: "100%",
        width: "66%",
        backgroundColor: "#444545",
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    optionsContainer:{
      marginTop: "60%",
      height: "50%",
      width: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // borderColor: "red",
      // borderWidth: "3px"
    },
    optionContainer:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // borderColor: "blue",
      borderWidth: "3px",
      width: "100%",
      borderColor: "transparent",
      borderBottomColor: "#F3F3F3",
    },
    logoContainer:{
      height: "100%",
      // width: 50,
      // paddingHorizontal: "10%",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      // borderColor: "green",
      // borderWidth: "3px",
      flex: 1,
    },
    icon:{
      height: "100%",
      maxWidth:"100%",
      color: "#C62E2D"
    },
    optionText: {
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100%",
      // borderColor: "green",
      // borderWidth: "3px",
      flex: 5,
      textTransform: "uppercase",
      color: "white"
    }
});
