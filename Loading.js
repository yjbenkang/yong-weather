import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading () {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.text}>날씨요정이 날씨를 파악 중입니다...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"flex-end",
      paddingHorizontal: 40,
      paddingVertical: 100,
      backgroundColor: "black"
    },    
    text:{
      color: "white",
      fontSize: 20
    }

});