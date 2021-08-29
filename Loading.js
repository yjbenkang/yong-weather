import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Loading () {
    return (
        <View style={styles.container}>
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
      backgroundColor: "#FDF6AA"
    },    
    text:{
      color: "#2c2c2c",
      fontSize: 20
    }

});