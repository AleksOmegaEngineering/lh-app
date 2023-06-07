import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons/'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Animated, Easing, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import BurgerMenu from "./components/burgerMenu";
// inspection cells need the property name, date of report creation and the number of issues
const TEMP =[
    {
        propName: "101 East Park",
        date: "2023-01-26 13:15:10",
        numIssues: 30
    },
    {
        propName: "Stone Lakes HOA",
        date: "2023-01-26 10:23:38",
        numIssues: 8
    },
    {
        propName: "101 East Park",
        date: "2023-01-25 07:57:50",
        numIssues: 7
    },
    {
        propName: "101 East Park",
        date: "2023-01-25 07:57:50",
        numIssues: 7
    },
    {
      propName: "101 East Park",
      date: "2023-01-25 07:57:50",
      numIssues: 7
    },
]
function ReportCell(props){
  return(
    <TouchableOpacity style = {styles.mainCell}>
      <View style = {styles.contentContainer}>
        <View style = {styles.logoContainer}>
          <FontAwesomeIcon icon={ faFlagCheckered } adjustsFontSizeToFit={true} numberOfLines={1} style={styles.icon} />
        </View>
        <View style = {styles.textContainer}>
          <Text style = {[styles.infoText, styles.first]}>{props.propName}</Text>
          <Text style = {[styles.infoText, styles.second]}>{props.date}</Text>
          <Text style = {[styles.infoText, styles.last]}>TOTAL ISSUES: {props.numIssues}</Text>
        </View>
      </View>
      <View style={styles.border}></View>
    </TouchableOpacity>
  )
}
export default function App() {
  return (
    <FlatList
        data = {TEMP}
        renderItem={({item}) => <ReportCell propName = {item.propName} date = {item.date} numIssues = {item.numIssues}/>}
        style={styles.flatList}
    />
  );
}

const styles = StyleSheet.create({
  flatList:{
    // height: "100%",
    // width: "100%",
    backgroundColor: "#F3F3F3",
    zIndex: 100,
    flex: 1,
    borderRadius: "10%"
  },
  mainCell:{
    height: 150,
    width: "100%",
    backgroundColor: "#F3F3F3",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  contentContainer:{
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "purple",
    // borderWidth: "2px",
    width: "60%",
    height: "98%"
  },
  border:{
    height: "2%",
    width: "80%",
    backgroundColor: "#444545"
  },
  logoContainer:{
    // borderColor: "blue",
    // borderWidth: "2px",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer:{
    // borderColor: "red",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: "2px",
    flex: 5,
  },
  infoText:{
    marginBottom: "10%",
  },
  last:{
    fontWeight: "200",
    marginBottom: 0,
  },
  first:{
    fontWeight: "bold"
  },
});
