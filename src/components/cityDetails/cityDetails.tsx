import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/usedTypedSelector";

import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { Card } from "@material-ui/core";

import "./cityDetails.css";

const CityDetails = () => {
  const navigate = useNavigate();
  const { fullCity, error, loading } = useTypedSelector(
    (state) => state.fullCity
  );
  const { fetchFullCity } = useActions();
  const params = useParams();

  useEffect(() => {
    fetchFullCity(params?.id ? params.id : null);
  }, []);

  return (
    <div className={"cityWrapper"}>
      {error ? <h1>Sorry, an error occurred</h1> : null}
      {loading ? <CircularProgress /> : null}
      {!error && !loading ? (
        <>
          <Button
            variant="outlined"
            size="large"
            color="default"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
          <h1>{fullCity?.name}</h1>

          <Card>
            <h3>{fullCity?.name ? fullCity.name : null}</h3>
            <div>
              {fullCity?.main?.temp
                ? `${Math.round(fullCity.main.temp) - 273}  \u00b0`
                : null}
              C
            </div>
            <div>
              {fullCity?.weather[0] ? (
                <img
                  src={`https://openweathermap.org/img/wn/${fullCity.weather[0].icon}@2x.png`}
                />
              ) : null}
            </div>
            <div>{fullCity?.weather ? fullCity.weather[0].main : null}</div>
          </Card>
        </>
      ) : null}
    </div>
  );
};

export default CityDetails;
