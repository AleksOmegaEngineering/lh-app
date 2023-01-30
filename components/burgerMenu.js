import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BurgerMenu({style}) {

    const BurgerXTrans = (props) =>{
        const [burgerStatus, setBurgerStatus] = useState(true)
        const fadeValue = useRef(new Animated.Value(1)).current;
        const angleTop = useRef(new Animated.Value(0)).current;
        const angleBottom = useRef(new Animated.Value(0)).current;
        const offsetTop = useRef(new Animated.Value(0)).current;
        const offsetBoth = useRef(new Animated.Value(0)).current;
        const offsetBottom = useRef(new Animated.Value(0)).current;
        
        React.useEffect(() => {
            Animated.parallel([
                Animated.timing(fadeValue, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(angleTop, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(angleBottom, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(offsetTop, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(offsetBottom, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(offsetBoth, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ]).start();
        }, [burgerStatus, fadeValue, angleTop, angleBottom]);
    
        const angleTopValue = angleTop.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        });
        const angleBottomValue = angleBottom.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-45deg']
        });
        const offsetTopValue = offsetTop.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        });
        const offsetBottomValue = offsetBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -25]
        });
        const offsetBothValue = offsetBoth.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -8]
        });

        return(
            <TouchableOpacity style={[styles.container, style]} onPress = {() =>{
                setBurgerStatus(!burgerStatus);
                console.log(burgerStatus);
            }}>
                <View style={styles.barContainer}>
                    <Animated.View style = {[styles.bar, {transform: [{rotate: angleTopValue}, {translateY: offsetTopValue}, {translateX: offsetBothValue}]}]}></Animated.View>
                    <Animated.View style = {[styles.bar, {opacity: fadeValue}]}></Animated.View>
                    <Animated.View style = {[styles.bar, {transform: [{rotate: angleBottomValue}, {translateY: offsetBottomValue}, {translateX: offsetBothValue}]}]}></Animated.View>
                </View>
            </TouchableOpacity>
        );
    
    }

  return (
    <BurgerXTrans/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: "black",    
  },
  barContainer: {
    height: "70%",
    width: "100%",
    flexDirection: "vertical",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bar: {
    width: "70%",
    height: "15%",
    backgroundColor: "black",
    borderRadius: "50%",
  }
});
