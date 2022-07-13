export enum CityActionTypes {
  FETCH_CITIES = "FETCH_CITIES",
  FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS",
  FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR",
}

export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export interface CityState {
  cities: City[];
  loading: boolean;
  error: null | string;
}
interface FetchCityAction {
  type: CityActionTypes.FETCH_CITIES;
}
interface FetchCitySuccessAction {
  type: CityActionTypes.FETCH_CITIES_SUCCESS;
  payload: City[];
}
interface FetchCityErrorAction {
  type: CityActionTypes.FETCH_CITIES_ERROR;
  payload: string;
}

export type CityAction =
  | FetchCityAction
  | FetchCitySuccessAction
  | FetchCityErrorAction;
