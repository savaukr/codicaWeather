import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ICity, IFullCity } from "../../types/city_types";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import "./cityCard.css";

const api_key = process.env.REACT_APP_WEATHER_KEY;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

type Props = {
  city: ICity;
  className: string;
  deleteCitiesHandler: (cityId: number) => void;
};

const CityCard = ({ city, className, deleteCitiesHandler }: Props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isLoading, setIsloading] = useState(false);
  const [fullCity, setFullCity] = useState<IFullCity | null>(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${api_key}`;

  async function fetchFullCity() {
    try {
      setIsloading(true);
      const response = await axios.get<IFullCity>(url);
      setFullCity(response.data);
    } catch (err) {
    } finally {
      setIsloading(false);
    }
  }
  useEffect(() => {
    fetchFullCity();
  }, []);

  const updateCity = async () => {
    await fetchFullCity();
  };

  const deleteCity = async () => {
    setIsloading(true);
    deleteCitiesHandler(city.id);
    setIsloading(false);
  };

  return (
    <div
      className={className}
      onClick={() => {
        navigate(`/city/${city.id}`);
      }}
    >
      <Card>
        {!isLoading && fullCity ? (
          <>
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
            <Button
              disabled={isLoading}
              variant="contained"
              onClick={(event) => {
                event.stopPropagation();
                updateCity();
              }}
              color="primary"
              className={classes.button}
            >
              Update
            </Button>
            <Button
              disabled={isLoading}
              variant="outlined"
              onClick={(event) => {
                event.stopPropagation();
                deleteCity();
              }}
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
    </div>
  );
};

export default CityCard;
