import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
          <Text>{temp}</Text>
        </View>
    );
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });