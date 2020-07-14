import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from './styles';
import useRequest from '../../hooks/request';
import parser from '../../helpers/dateParser';

const BirthdateList = ({ token }) => {
  const classes = useStyles();

  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;
  const [values, parseValues] = useState([]);

  useEffect(() => {
    setOptions({
      method: 'GET',
      url: `http://${process.env.REACT_APP_BACKEND}:5000/anniversary/birthdates`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }, [token]);

  useEffect(() => {
    if (data) {
      const { birthdates } = data;
      const parsedData = parser(birthdates);
      parseValues(parsedData);
    }
  }, [data]);

  return (
    <TableContainer>
      {error && (
        <Paper>
          <div className={classes.errorMsg}>
            <p>{error.error}</p>
          </div>
        </Paper>
      )}

      {loading && <LinearProgress />}
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Aniversariante</TableCell>
            <TableCell>Presente</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Local</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((each) => (
            <TableRow key={each.id}>
              <TableCell>{each.name}</TableCell>
              <TableCell>{each.gift}</TableCell>
              <TableCell>{each.date}</TableCell>
              <TableCell>{each.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BirthdateList;
