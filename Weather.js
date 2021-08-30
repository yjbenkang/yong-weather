import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "./Loading";

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "맑음",
      subtitle: "오늘 같은날 밖은 위험합니다."
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "이슬비",
      subtitle: "잔잔하게 비옵니다."
    },
    Rain: {
      iconName: "weather-pouring",
      gradient: ["#00C6FB", "#005BEA"],
      title: "비",
      subtitle: "우산을 챙깁시다."
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "눈",
      subtitle: "이제는 눈이 싫은 나이"
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "맑음",
      subtitle: "밖에 나가자~ : )"
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "맑음",
      subtitle: "밖에 나가자~ : )"
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "흐림",
      subtitle: "우리 인생은 맑음"
    },
    Mist: {
      iconName: "weather-fog",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "물안개",
      subtitle: "안전운전!"
    },
    Dust: {
      iconName: "weather-hazy",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "미세먼지 많음",
      subtitle: "마스크 필수"
    },
    Haze: {
      iconName: "weather-hazy",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "안개",
      subtitle: "먼지로 인한 안개 !!"
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
    if (condition === undefined){
        return <Loading/>
    }
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
      fontWeight: "600",
      color:"white"
    },
    halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    quaterContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
      },
    samsaContainer: {
      flex: 3,
      justifyContent:"center",
      alignItems:"center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "800",
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "400",
        color: "white",
        fontSize: 20
    },
    description: {
        color: "white",
        fontSize: 23,
        marginBottom: 10,
        fontWeight: "700"
    },

  });