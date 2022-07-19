import { fullCityReducer } from "./fullCityReducer";
import { FullCityActionTypes } from "../../types/city_types";

describe("fullCityReducer", () => {
  test("set full city loading", () => {
    expect(
      fullCityReducer(
        { fullCity: null, loading: false, error: null },
        { type: FullCityActionTypes.FETCH_FULL_CITY }
      )
    ).toEqual({
      fullCity: null,
      loading: true,
      error: null,
    });
  });

  test("set full city success", () => {
    expect(
      fullCityReducer(
        { fullCity: null, loading: false, error: null },
        {
          type: FullCityActionTypes.FETCH_FULL_CITY_SUCCESS,
          payload: {
            coord: {
              lon: 26.9167,
              lat: 53.1667,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            base: "stations",
            main: {
              temp: 287.21,
              feels_like: 286.97,
              temp_min: 287.21,
              temp_max: 287.21,
              pressure: 1020,
              humidity: 88,
              sea_level: 1020,
              grnd_level: 996,
            },
            visibility: 10000,
            wind: {
              speed: 2.47,
              deg: 276,
              gust: 5.82,
            },
            clouds: {
              all: 93,
            },
            dt: 1658166564,
            sys: {
              country: "BY",
              sunrise: 1658110062,
              sunset: 1658168939,
            },
            timezone: 10800,
            id: 618890,
            name: "Zhaulki",
            cod: 200,
          },
        }
      )
    ).toEqual({
      fullCity: {
        coord: {
          lon: 26.9167,
          lat: 53.1667,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        base: "stations",
        main: {
          temp: 287.21,
          feels_like: 286.97,
          temp_min: 287.21,
          temp_max: 287.21,
          pressure: 1020,
          humidity: 88,
          sea_level: 1020,
          grnd_level: 996,
        },
        visibility: 10000,
        wind: {
          speed: 2.47,
          deg: 276,
          gust: 5.82,
        },
        clouds: {
          all: 93,
        },
        dt: 1658166564,
        sys: {
          country: "BY",
          sunrise: 1658110062,
          sunset: 1658168939,
        },
        timezone: 10800,
        id: 618890,
        name: "Zhaulki",
        cod: 200,
      },
      loading: false,
      error: null,
    });
  });
});
