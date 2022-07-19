import axios from "axios";
import { Dispatch } from "redux";

import {
  CityActionTypes,
  CityAction,
  FullCityActionTypes,
  FullCityAction,
} from "./../../types/city_types";

import { cities } from "../../data/cities_data";
// const url = "http://bulk.openweathermap.org/sample/city.list.json";
// На сайті https://openweathermap.org/ немає роута для отримання списку міст. Є можливість скачати архів зі списком міст
// тож чатину цього файлу помістив у файл cities_data

export const fetchCities = () => {
  return async (dispatch: Dispatch<CityAction>) => {
    try {
      dispatch({ type: CityActionTypes.FETCH_CITIES });
      //   const response = await axios.get(url);
      dispatch({
        type: CityActionTypes.FETCH_CITIES_SUCCESS,
        // payload: response.data,
        payload: cities,
      });
    } catch (err) {
      dispatch({
        type: CityActionTypes.FETCH_CITIES_ERROR,
        payload: "Виникла помилка при завантаженні міст",
      });
    }
  };
};

const api_key = process.env.REACT_APP_WEATHER_KEY;

export const fetchFullCity = (cityId: string | null) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${api_key}`;
  return async (dispatch: Dispatch<FullCityAction>) => {
    try {
      dispatch({ type: FullCityActionTypes.FETCH_FULL_CITY });
      const response = await axios.get(url);
      dispatch({
        type: FullCityActionTypes.FETCH_FULL_CITY_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: FullCityActionTypes.FETCH_FULL_CITY_ERROR,
        payload: "Виникла помилка при завантаженні міста",
      });
    }
  };
};
