import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

import "./addCity.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    padding: "14px 22px",
  },
}));

export default function AddCity({
  addCitiesHandler,
  citiesNorm,
  citiesNormIds,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    id: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="addCityWrapper">
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">City</InputLabel>
        <Select
          native
          value={state.id}
          onChange={handleChange}
          inputProps={{
            name: "id",
            id: "filled-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {citiesNormIds
            .sort((prev, next) =>
              citiesNorm?.[prev].name?.localeCompare(citiesNorm?.[next].name)
            )
            .map((id) => (
              <option key={id} value={id}>
                {citiesNorm?.[id]?.name}
              </option>
            ))}
        </Select>
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        size="large"
        onClick={() => {
          if (state.id) addCitiesHandler([Number(state.id)]);
        }}
      >
        Add city
      </Button>
    </div>
  );
}
