import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/usedTypedSelector";
import { useActions } from "../../hooks/useActions";

import CityCard from "../cityCard/cityCard";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, CircularProgress } from "@material-ui/core";

import "./cityList.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CityList = () => {
  const classes = useStyles();
  const { cities, error, loading } = useTypedSelector((state) => state.city);
  const { fetchCities } = useActions();

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="tableWrapper">
      <Container maxWidth="sm">
        <h1>Cities list</h1>
        {loading ? <CircularProgress /> : ""}
        {error ? <h1>Sorry, an error occurred</h1> : null}

        {!error && !loading
          ? cities.map((city) => <CityCard city={city} key={city.id} />)
          : // <TableContainer component={Paper}>
            //   <Table
            //     className={classes.table}
            //     size="small"
            //     aria-label="a dense table"
            //   >
            //     <TableHead>
            //       <TableRow>
            //         <TableCell align="center">id</TableCell>
            //         <TableCell align="center">name</TableCell>
            //         <TableCell align="center">state</TableCell>
            //         <TableCell align="center">country</TableCell>
            //       </TableRow>
            //     </TableHead>
            //     <TableBody>
            //       {cities.map((city) => (
            //         <TableRow key={city.id} className={"pointer"}>
            //           <TableCell align="center">{city.id}</TableCell>
            //           <TableCell align="center">{city.name}</TableCell>
            //           <TableCell align="center">{city.state}</TableCell>
            //           <TableCell align="center">{city.country}</TableCell>
            //         </TableRow>
            //       ))}
            //     </TableBody>
            //   </Table>
            // </TableContainer>
            null}
      </Container>
    </div>
  );
};
export default CityList;
