import React, { useEffect, useState, useMemo } from "react";

import { normalizeData } from "../../helpers/normalizeData";

import { IFullCity } from "../../types/city_types";
import { useTypedSelector } from "../../hooks/usedTypedSelector";
import { useActions } from "../../hooks/useActions";

import CityCard from "../cityCard/cityCard";

import { CircularProgress } from "@material-ui/core";

import "./cityList.css";

const CityList = () => {
  const { cities, error, loading } = useTypedSelector((state) => state.city);
  const [viewedCitiesIds, setViewedCitiesIds] = useState<number[] | null>();
  const { fetchCities } = useActions();

  useEffect(() => {
    fetchCities();
  }, []);

  const [citiesNorm, citiesNormIds] = useMemo(
    () => normalizeData(cities),
    [cities]
  );

  useEffect(() => {
    const ids = localStorage.getItem("viewedCitiesIds");
    if (ids) setViewedCitiesIds(JSON.parse(ids));
  }, []);

  const addCitiesHandler = (ids: number[]) => {
    if (viewedCitiesIds) {
      setViewedCitiesIds([...viewedCitiesIds, ...ids]);
      localStorage.setItem(
        "viewedCitiesIds",
        JSON.stringify([...viewedCitiesIds, ...ids])
      );
    } else {
      setViewedCitiesIds(ids);
      localStorage.setItem("viewedCitiesIds", JSON.stringify(ids));
    }
  };

  const deleteCitiesHandler = (cityId: number) => {
    if (viewedCitiesIds) {
      const filterIds = viewedCitiesIds.filter((id) => id !== cityId);
      setViewedCitiesIds(filterIds);
      localStorage.setItem("viewedCitiesIds", JSON.stringify(filterIds));
    }
  };

  return (
    <div className="tableWrapper">
      <div className="container">
        <div className="addCity">
          <button
            type="button"
            onClick={() => {
              if (citiesNormIds) addCitiesHandler(citiesNormIds);
            }}
          >
            add
          </button>
        </div>
        <h1>Cities list</h1>
        {loading ? <CircularProgress /> : null}
        {error ? <h1>Sorry, an error occurred</h1> : null}
        <div className="cards">
          {!error && !loading && viewedCitiesIds
            ? viewedCitiesIds.map((id) => (
                <CityCard
                  city={citiesNorm[id]}
                  key={citiesNorm[id].id}
                  className="cityCardWrapper"
                  deleteCitiesHandler={deleteCitiesHandler}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
export default CityList;
