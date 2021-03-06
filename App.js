import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import { Weather } from './Weather';

const API_KEY = "2bd59b60cf5a0c3d72bfc726cf9aeebf";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        name,
        main: {temp, temp_max, temp_min},
        weather,
        wind: {speed}
      }} =  await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      name,
      temp,
      temp_max,
      temp_min,
      condition : weather[0].main, 
      windSpeed : speed
    });
  };

  getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw Error;
        return;
      }
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("위치 확인되지 않음.", "날씨 정보를 가져올 수 없습니다.");
    } finally {
      this.setState({ isLoading: false });
    }
  };
  
  componentDidMount() {
    this.getLocation();

  }

  render() {
    const { 
      isLoading, 
      name,
      temp,
      temp_max,
      temp_min,
      condition, 
      windSpeed 
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} name={name} tempMax={temp_max} tempMin={temp_min} windSpeed={windSpeed} />
    );
  }
}