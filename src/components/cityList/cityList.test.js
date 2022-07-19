import * as reduxHooks from "react-redux";
import * as usedTypedHooks from "../../hooks/usedTypedSelector";

import { fetchCities } from "../../store/action-creators/city";

import CityList from "./cityList";

jest.mock("react-redux");
jest.mock("../../hooks/usedTypedSelector");

const mockedUseTypedSelector = jest.spyOn(usedTypedHooks, "useTypedSelector");
const mockedUseSelector = jest.spyOn(reduxHooks, "useSelector");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("city details", () => {
  it("fetch Cities", async () => {
    const dispatch = jest.fn();
    await fetchCities()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
