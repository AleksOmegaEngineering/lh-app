import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { Animated, Easing, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BurgerMenu from "./components/burgerMenu";

export default function App() {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style={{ barStyle: "dark", backgroundColor: "#ffff" }} />
      <BurgerMenu style = {styles.container}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex: 1,
    // borderColor: "red",
    // borderWidth: "5px",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  container: {
    marginLeft: "10%",
    height: 50,
    width: 50,
    borderColor: "red",
    borderWidth: "1px"
  },
});
