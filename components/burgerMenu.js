import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from "react";
import { Animated, Button, Easing, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BurgerMenu(properties) {
    let animationTime = 250;

    const BurgerXTrans = () =>{
        // const [burgerStatus, setBurgerStatus] = useState(true); // true means the burger is in burger form and fals means it is in x form
        const [burgerSize, setBurgerSize] = useState([5, 34]);
        const [burgerSizeLoaded, burgerSizeLoader] = useState(false); // if the burger size has been loaded yet
        const [burgerBoxSize, setBurgerBoxSize] = useState(0); // the height of the burger container
        const fadeValue = properties.fadeValue;
        const angleTop = properties.angleTop;
        const angleBottom = properties.angleBottom;
        const offsetTop = properties.offsetTop;
        const offsetBoth = properties.offsetBoth;
        const offsetBottom = properties.offsetBottom;
        const color = properties.color;
        
        React.useEffect(() => {
            if(burgerSizeLoaded){
                if(properties.menuStatus == true){
                    // Animated.sequence([
                        Animated.parallel([
                            Animated.timing(fadeValue, {
                                toValue: 0,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(angleTop, {
                                toValue: 1,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(angleBottom, {
                                toValue: 1,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(offsetTop, {
                                toValue: 0.23,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(offsetBottom, {
                                toValue: 0.23,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(offsetBoth, {
                                toValue: 1,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            }),
                            Animated.timing(color, {
                                toValue: 1,
                                delay: animationTime*2.2,
                                duration: animationTime,
                                easing: Easing.linear,
                                useNativeDriver: false
                            })
                        ]).start();
                        properties.setFadeValue(fadeValue);
                        properties.setAngleTop(angleTop);
                        properties.setAngleBottom(angleBottom);
                        properties.setOffsetTop(offsetTop);
                        properties.setOffsetBoth(offsetBoth);
                        properties.setOffsetBottom(offsetBottom);
                        properties.setColor(color);
                }
                else{
                    Animated.parallel([
                        Animated.timing(fadeValue, {
                            toValue: 1,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(angleTop, {
                            toValue: 0,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(angleBottom, {
                            toValue: 0,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(offsetTop, {
                            toValue:0,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(offsetBottom, {
                            toValue: 0,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(offsetBoth, {
                            toValue: 0,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        }),
                        Animated.timing(color, {
                            toValue: 0,
                            delay: animationTime*2,
                            duration: animationTime,
                            easing: Easing.linear,
                            useNativeDriver: false
                        })
                    ]).start();
                    properties.setFadeValue(fadeValue);
                    properties.setAngleTop(angleTop);
                    properties.setAngleBottom(angleBottom);
                    properties.setOffsetTop(offsetTop);
                    properties.setOffsetBoth(offsetBoth);
                    properties.setOffsetBottom(offsetBottom);
                    properties.setColor(color);
                }
            }
        }, [properties.menuStatus, fadeValue, angleTop, angleBottom, burgerSize, burgerSizeLoaded]);
    
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
            outputRange: [0, (burgerBoxSize)]
        });
        const offsetBottomValue = offsetBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -(burgerBoxSize)]
        });
        const offsetBothValue = offsetBoth.interpolate({
            inputRange: [0, 1],
            outputRange: [0, burgerSize[0]]
        });
        const colorValue = color.interpolate({
            inputRange: [0, 1],
            outputRange: ["black", "#F3F3F3"]
        });

        return(
            <Pressable style={[styles.container, properties.style]} onPress = {() =>{
                // setBurgerStatus(!burgerStatus);
                // console.log("local burger status:", burgerStatus);
                properties.setMenuStatus(previousState => !previousState);
            }} onLayout={(event) => {
                let {x, y, width, height} = event.nativeEvent.layout;
                setBurgerBoxSize(height);
            }}>
                <View style={styles.barContainer}>
                    <Animated.View style = {[styles.bar, {backgroundColor: colorValue}, {transform: [{rotate: angleTopValue}, {translateY: offsetTopValue}, {translateX: offsetBothValue}]}]} onLayout = {(event) =>{
                     let {x, y, width, height} = event.nativeEvent.layout;
                    //  console.log(height, width);
                     burgerSizeLoader(true);
                     setBurgerSize([height, width]);
                     }}></Animated.View>
                    <Animated.View style = {[styles.bar, {backgroundColor: colorValue}, {opacity: fadeValue}]}></Animated.View>
                    <Animated.View style = {[styles.bar, {backgroundColor: colorValue}, {transform: [{rotate: angleBottomValue}, {translateY: offsetBottomValue}, {translateX: offsetBothValue}]}]}></Animated.View>
                </View>
            </Pressable>
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
    // backgroundColor: "#"
    borderRadius: "10%",  
  },
  barContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: "70%",
    width: "100%",
    flexDirection: "vertical",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bar: {
    width: "70%",
    height: "15%",
    borderRadius: "50%",
  }
});
