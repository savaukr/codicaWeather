import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as reduxHooks from "react-redux";
import * as usedTypedHooks from "../../hooks/usedTypedSelector";

import { fetchFullCity } from "../../store/action-creators/city";

import CityDetails from "./cityDetails";

jest.mock("react-redux");
jest.mock("../../hooks/usedTypedSelector");

const mockedUseTypedSelector = jest.spyOn(usedTypedHooks, "useTypedSelector");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("city details", () => {
  it("fetch fullCity", async () => {
    const cityId = "618890";
    const dispatch = jest.fn();
    await fetchFullCity(cityId)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("snap shot city details", () => {
    mockedDispatch.mockReturnValue(jest.fn());
    mockedUseTypedSelector.mockImplementation(() => {
      return {
        fullCiity: {
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
        error: null,
        loading: false,
      };
    });
    const utils = render(
      <MemoryRouter>
        <CityDetails />
      </MemoryRouter>
    );
    expect(utils).toMatchSnapshot();
    const text = screen.getByText(/Full info about city/i);
    expect(text).toBeInTheDocument();
    // const btn = screen.getByRole("button");
    let btn = screen.getByText(/back/i);
    expect(btn).toBeInTheDocument();
  });
});
