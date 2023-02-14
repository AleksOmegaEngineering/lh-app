import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { Animated, Easing, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import BurgerMenu from "./components/burgerMenu";
import Header from "./components/header.js";
import Menu from "./components/menu.js";
import MainCC from './components/mainContentContainer.js';

export default function App() {
  const [activeScreen, setActiveScreen] = useState("Users");
  useEffect(() => {
    // console.log(activeScreen)
  }, [activeScreen])
  return (
    <View style = {styles.background}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar style={{ barStyle: "dark", backgroundColor: "#ffff" }} />
        <View style={styles.contentContainer}>
          <Header activeScreen = {activeScreen} setActiveScreen = {setActiveScreen} style={styles.headerStyle}/>
          <MainCC style={styles.mainContainerStyle}/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    height: "100%",
    width: "100%",
    backgroundColor: "#444545"
  },
  safeAreaView:{
    position: "relative",
    flex: 1,
    // borderColor: "red",
    // borderWidth: "5px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentContainer: {
    height: "100%",
    width: "100%",
    // borderWidth: 4,
    // borderColor: "green",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "purple",
  },
  headerStyle:{
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
    // paddingBottom: "5%"
  },
  mainContainerStyle: {
    // borderColor: "red",
    // borderWidth: 3,
    flex: 8,
  }
});
