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

const BirthdateList = () => {
  const classes = useStyles();

  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  useEffect(() => {
    setOptions({
      method: 'GET',
      url: `http://${process.env.REACT_APP_BACKEND}:5000/anniversary/birthdates`,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5NDY5MzY4OCwiZXhwIjoxNTk0Njk3Mjg4fQ.B85RsMjBPxteX2EAUbxkk2gT5DCwon1jV648-GoUy30'
      }
    });
  }, []);

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
            <TableCell align="right">Presente</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Local</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.birthdates.map((each) => (
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
