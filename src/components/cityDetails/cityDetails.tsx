import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/usedTypedSelector";

import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { Card } from "@material-ui/core";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
          <h2>Full info about city {fullCity?.name ? fullCity.name : null}</h2>

          <Card className="cityDetailsCard">
            <div>
              <div>
                temp min:{" "}
                {fullCity?.main?.temp
                  ? `${Math.round(fullCity.main.temp_min) - 273}  \u00b0`
                  : null}
                C
              </div>
              <div>
                temp max:{" "}
                {fullCity?.main?.temp
                  ? `${Math.round(fullCity.main.temp_max) - 273}  \u00b0`
                  : null}
                C
              </div>
              <div>
                feels like:{" "}
                {fullCity?.main?.temp
                  ? `${Math.round(fullCity.main.feels_like) - 273}  \u00b0`
                  : null}
                C
              </div>
              <div className="pressure">
                pressuree:{" "}
                {fullCity?.main?.pressure ? `${fullCity.main.pressure}` : null}
              </div>
              <div>
                humidity:{" "}
                {fullCity?.main?.humidity ? `${fullCity.main.humidity}` : null}
              </div>
              <div>
                {fullCity?.weather[0] ? (
                  <img
                    src={`https://openweathermap.org/img/wn/${fullCity.weather[0].icon}@2x.png`}
                  />
                ) : null}
              </div>
              <div>
                {fullCity?.weather ? fullCity.weather[0].description : null}
              </div>
            </div>
            <div className="wind">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Wind
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={`speed: ${
                      fullCity?.wind ? fullCity.wind.speed : null
                    }`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={`deg: ${
                      fullCity?.wind ? fullCity.wind.deg : null
                    }`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary={`gust: ${
                      fullCity?.wind ? fullCity.wind.gust : null
                    }`}
                  />
                </ListItem>
              </List>
            </div>
          </Card>
        </>
      ) : null}
    </div>
  );
};

export default CityDetails;
