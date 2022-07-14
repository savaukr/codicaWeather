import { combineReducers } from "redux";
import { cityReducer } from "./citiesReducer";
import { fullCityReducer } from "./fullCityReducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  fullCity: fullCityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
