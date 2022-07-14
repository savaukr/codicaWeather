export enum CityActionTypes {
  FETCH_CITIES = "FETCH_CITIES",
  FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS",
  FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR",
}

export enum FullCityActionTypes {
  FETCH_FULL_CITY = "FETCH_FULL_CITY",
  FETCH_FULL_CITY_SUCCESS = "FETCH_FULL_CITY_SUCCESS",
  FETCH_FULL_CITY_ERROR = "FETCH_FULL_CITY_ERROR",
}

export interface ICity {
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
  cities: ICity[];
  loading: boolean;
  error: null | string;
}
interface FetchCityAction {
  type: CityActionTypes.FETCH_CITIES;
}
interface FetchCitySuccessAction {
  type: CityActionTypes.FETCH_CITIES_SUCCESS;
  payload: ICity[];
}
interface FetchCityErrorAction {
  type: CityActionTypes.FETCH_CITIES_ERROR;
  payload: string;
}

export type CityAction =
  | FetchCityAction
  | FetchCitySuccessAction
  | FetchCityErrorAction;

export interface IFullCity {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface FullCityState {
  fullCity: IFullCity | null;
  loading: boolean;
  error: null | string;
}
interface FetchFullCityAction {
  type: FullCityActionTypes.FETCH_FULL_CITY;
}
interface FetchFullCitySuccessAction {
  type: FullCityActionTypes.FETCH_FULL_CITY_SUCCESS;
  payload: IFullCity;
}
interface FetchFullCityErrorAction {
  type: FullCityActionTypes.FETCH_FULL_CITY_ERROR;
  payload: string;
}
export type FullCityAction =
  | FetchFullCityAction
  | FetchFullCitySuccessAction
  | FetchFullCityErrorAction;
