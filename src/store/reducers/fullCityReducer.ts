import {
  FullCityActionTypes,
  FullCityState,
  FullCityAction,
} from "./../../types/city_types";

const initialState: FullCityState = {
  fullCity: null,
  loading: false,
  error: null,
};

export const fullCityReducer = (
  state = initialState,
  action: FullCityAction
): FullCityState => {
  switch (action.type) {
    case FullCityActionTypes.FETCH_FULL_CITY:
      return { fullCity: null, loading: true, error: null };
    case FullCityActionTypes.FETCH_FULL_CITY_SUCCESS:
      return { fullCity: action.payload, loading: false, error: null };
    case FullCityActionTypes.FETCH_FULL_CITY_ERROR:
      return { fullCity: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
