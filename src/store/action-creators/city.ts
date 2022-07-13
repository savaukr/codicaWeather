import axios from "axios";
import { Dispatch } from "redux";
import { CityActionTypes, CityAction } from "./../../types/city_types";

import { cities } from "../../data/cities_data";
// const url = "http://bulk.openweathermap.org/sample/city.list.json";

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
