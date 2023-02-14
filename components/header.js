import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import BurgerMenu from "./burgerMenu";
import Menu from "./menu";

export default function Header(props) {
  let [menuStatus, setMenuStatus] = useState(false);
  let [fadeValue, setFadeValue] = useState(new Animated.Value(1));
  let [fadeValue2, setFadeValue2] = useState(new Animated.Value(0));
  let [preLeft, setPreLeft] = useState(new Animated.Value(1));
  let [angleTop, setAngleTop] = useState(new Animated.Value(0));
  let [angleBottom, setAngleBottom] = useState(new Animated.Value(0));
  let [offsetTop, setOffsetTop] = useState(new Animated.Value(0));
  let [offsetBoth, setOffsetBoth] = useState(new Animated.Value(0));
  let [offsetBottom, setOffsetBottom] = useState(new Animated.Value(0));
  let [color, setColor] = useState(new Animated.Value(0));
  let [activeScreen2, setActiveScreen2] = useState("User");
  React.useEffect(() => {
    // console.log(`active screen ${activeScreen2}`)
    props.setActiveScreen(activeScreen2)
  }, [activeScreen2])
  return (
    <View style={[styles.headerContainer, props.style]}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
              <Image
                style={styles.logoImage}
                source={require("./../assets/images/newLogo.png")}
              />
          </View>
          <BurgerMenu fadeValue = {fadeValue} angleTop = {angleTop} angleBottom = {angleBottom} offsetTop = {offsetTop} offsetBoth = {offsetBoth} offsetBottom = {offsetBottom} setFadeValue = {setFadeValue} setAngleTop = {setAngleTop} setAngleBottom = {setAngleBottom} setOffsetTop = {setOffsetTop} setOffsetBoth = {setOffsetBoth} setOffsetBottom = {setOffsetBottom} style = {styles.burgerMenuContainer} menuStatus = {menuStatus} setMenuStatus = {setMenuStatus} color = {color} setColor = {setColor}/>
          <Menu activeScreen = {activeScreen2} setActiveScreen = {setActiveScreen2} fadeValue={fadeValue2} setFadeValue = {setFadeValue2} preLeft = {preLeft} setPreLeft = {setPreLeft} open={menuStatus}/>
        </View>
    </View> 
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        // position: "absolute",
        height: "15%",
        width: "100%",
        display: "flex",
        backgroundColor: "#444545",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        // borderWidth: 4,
        // borderColor: "blue",
        // borderWidth: "3px"

    },
    headerContent:{
      height: "80%",
      width: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection:"row",
      // borderColor: "purple",
      // borderWidth: "1px"
    },
    logoContainer:{
      height: "100%",
      width: "80%",
      // borderColor: "red",yyyyyy
      // borderWidth: "1px",yyyyyy
      display: "flex",
      flexDirection: 'row',
      // alignItems: "center",
      // justifyContent: "flex-start",
    },
    logoImage:{
      resizeMode: "contain",
      height: "100%",
      width: "50%",
      // borderColor: "green",
      // borderWidth: "1px"
      // backgroundColor: "black"
    },
    burgerMenuContainer: {
      // borderWidth: 1,
      // borderColor: "red",
      // marginLeft: "10%",
      height: 40,
      width: 40,
      zIndex: 5,
      // borderColor: "red",
      // borderWidth: "1px"
    },
});
