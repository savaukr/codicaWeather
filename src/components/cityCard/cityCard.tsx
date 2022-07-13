import React, { useState, useEffect } from "react";
import axios from "axios";

import { ICity, IFullCity } from "../../types/city_types";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import "./cityCard.css";

const api_key = "4b456c4b39aae41889a3f1fa952bb6ff";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

type Props = {
  city: ICity;
  className: string;
};

const CityCard = ({ city, className }: Props) => {
  const classes = useStyles();
  const [isLoading, setIsloading] = useState(false);
  const [stateCity, setCity] = useState<IFullCity | null>(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${api_key}`;
  async function fetchFullCity() {
    try {
      setIsloading(true);
      const response = await axios.get<IFullCity>(url);
      setCity(response.data);
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
    console.log("delete");
  };

  return (
    <div className={className}>
      <h3>
        {stateCity?.name ? stateCity.name : null}
        {"Kyiv"}
      </h3>
      <div>
        {stateCity?.main?.temp ? `${stateCity.main.temp - 273}  \u00b0` : null}
        {`273 \u00b0`}
      </div>
      <Button
        variant="contained"
        onClick={updateCity}
        color={"primary"}
        className={classes.button}
      >
        Update
      </Button>
      <Button
        variant="outlined"
        onClick={deleteCity}
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};

export default CityCard;
