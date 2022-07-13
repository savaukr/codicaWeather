import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "../../store/action-creators/city";

import { useTypedSelector } from "../../hooks/usedTypedSelector";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CityList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const { cities, error, loading } = useTypedSelector((state) => state.city);
  console.log("cities:", cities);
  return (
    <div className="wrapper">
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">state</TableCell>
              <TableCell align="center">country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.state}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default CityList;
