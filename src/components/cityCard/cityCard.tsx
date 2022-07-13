import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

import "./cityCard.css";
import { ICity, IFullCity } from "../../types/city_types";

const api_key = "4b456c4b39aae41889a3f1fa952bb6ff";
type Props = {
  city: ICity;
};
const CityCard = ({ city }: Props) => {
  const [stateCity, setCity] = useState<IFullCity | null>(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${api_key}`;
  async function fetchFullCity() {
    try {
      const response = await axios.get<IFullCity>(url);
      setCity(response.data);
    } catch (err) {}
  }
  useEffect(() => {
    fetchFullCity();
  }, []);

  const updateCity = () => {
    fetchFullCity();
  };
  return (
    <div className="cityCardWrapper">
      <h1>{stateCity?.name}</h1>
      <Button variant="outlined" onClick={updateCity} color={"primary"}>
        Update
      </Button>
    </div>
  );
};

export default CityCard;
