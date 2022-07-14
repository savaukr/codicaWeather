import React, { useEffect, useState, useMemo } from "react";

import { normalizeData } from "../../helpers/normalizeData";

import { useTypedSelector } from "../../hooks/usedTypedSelector";
import { useActions } from "../../hooks/useActions";

import AddCity from "../addCity/addCity";
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
    <div>
      <div className="container">
        <div className="titleWrapper">
          <h1 className="title">Cities weather</h1>
        </div>
        <div className="addCity">
          <AddCity
            addCitiesHandler={addCitiesHandler}
            citiesNorm={citiesNorm}
            citiesNormIds={citiesNormIds.filter((id) =>
              viewedCitiesIds?.length ? !viewedCitiesIds.includes(id) : true
            )}
          />
        </div>
        {loading ? <CircularProgress /> : null}
        {error ? <h1>Sorry, an error occurred</h1> : null}
        <div className="cards">
          {!error && !loading && viewedCitiesIds
            ? viewedCitiesIds.map((id) => (
                <CityCard
                  city={citiesNorm?.[id]}
                  key={id}
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
