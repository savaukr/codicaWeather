import {
  CityActionTypes,
  CityState,
  CityAction,
} from "./../../types/city_types";

const initialState: CityState = {
  cities: [],
  loading: false,
  error: null,
};

export const cityReducer = (
  state = initialState,
  action: CityAction
): CityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITIES:
      return { cities: [], loading: true, error: null };
    case CityActionTypes.FETCH_CITIES_SUCCESS:
      return { cities: action.payload, loading: false, error: null };
    case CityActionTypes.FETCH_CITIES_ERROR:
      return { cities: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
