import React, { useState } from "react";
import axios from "axios";

import { Button } from "@material-ui/core";

import { useParams } from "react-router-dom";

import "./city.css";
import { ICity } from "../../types/city_types";

interface CityParams {
  id: string;
}

const City = () => {
  const [stateCity, setCity] = useState<ICity | null>(null);
  const params = useParams();

  const updateCity = () => {
    console.log("update");
  };

  return (
    <div className={"cityWrapper"}>
      <h1>{stateCity?.name}</h1>
      <Button variant="outlined" onClick={updateCity} color={"primary"}>
        Update
      </Button>
      <div>City item: {params.id}</div>;
    </div>
  );
};

export default City;
