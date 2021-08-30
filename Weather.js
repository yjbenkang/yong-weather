import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const Weather = ({temp, condition}) => {
    return (
        <View style={styles.container}>
          <Text>{temp}</Text>
          <Text>{condition}</Text>
        </View>
    );
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });