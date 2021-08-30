import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "맑음",
      subtitle: "밖에 나가자~ : )"
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    }
  };

export const Weather = ({
    isLoading, 
    name,
    condition, 
    temp,
    tempMax,
    tempMin,
    windSpeed }) => {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.halfContainer}>
            <MaterialCommunityIcons
              size={96}
              name={weatherOptions[condition].iconName}
              color="white"
            />
            <Text style={styles.description}>{name}</Text>
            <Text style={styles.temp}>{temp}°C</Text>
          </View>
          <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <View style={{ ...styles.halfContainer, ...styles.quaterContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                    </Text>
                </View>
                <View style={{ ...styles.halfContainer, ...styles.samsaContainer}}>
                    <Text style={styles.description}>최고기온  {tempMax}°C</Text>
                    <Text style={styles.description}>최저기온  {tempMin}°C</Text>
                    <Text style={styles.description}>풍속  {windSpeed}m/s</Text>
                </View>

            </View>
        </LinearGradient>
        // <Text>{condition}</Text>
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
        "Dust",
      ]).isRequired
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    temp: {
      fontSize: 42,
      color:"white"
    },
    halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    quaterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
    samsaContainer: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    description: {
        color: "white",
        fontSize: 20,
        marginBottom: 10
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
  });