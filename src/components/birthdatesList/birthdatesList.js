import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import UpdateForm from '../updateform/updateform';

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

  const deleteBirthdateHandler = async (id) => {
    await fetch(`http://${process.env.REACT_APP_BACKEND}:5000/anniversary/birthdate/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  const [modal, setModal] = useState({
    show: false,
    id: null,
    currentData: null
  });

  const hideModal = () => setModal((pState) => ({ ...pState, show: false }));
  const modalDataHandler = (id, currentData) => {
    setModal({
      show: !modal.show,
      id,
      currentData
    });
  };

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

      <Modal open={modal.show} onClose={hideModal}>
        <div>
          <UpdateForm token={token} values={modal} />
        </div>
      </Modal>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Aniversariante</TableCell>
            <TableCell>Presente</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Local</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((each) => (
            <TableRow key={each.id} className={classes.tableRow}>
              <TableCell className={classes.avatarWrapper}>
                <Avatar>{each.name && each.name[0].toUpperCase()}</Avatar>
                <p>{each.name}</p>
              </TableCell>
              <TableCell>{each.gift}</TableCell>
              <TableCell>{each.date}</TableCell>
              <TableCell>{each.location}</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => deleteBirthdateHandler(each.id)} />
                <EditIcon onClick={() => modalDataHandler(each.id, each)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BirthdateList;
