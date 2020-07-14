import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useForm, Controller } from 'react-hook-form';
import { useStyles } from './styles';

import useRequest from '../../hooks/request';

const UpdateForm = ({ token, values }) => {
  const classes = useStyles();
  const { id, currentData } = values;

  const [options, setOptions] = useState(null);
  const [requestData, clear] = useRequest(options);
  const { data, loading, error } = requestData;

  const { control, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const submitHandler = (opt) => setOptions({
    method: 'PUT',
    url: `http://${process.env.REACT_APP_BACKEND}:5000/anniversary/update-birthdate/${id}`,
    data: opt,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  useEffect(() => {
    let timer;
    if (data) { timer = setTimeout(clear, 1500); }
    return () => clearTimeout(timer);
  }, [data, clear]);

  return (
    <Container className={classes.root}>

      {error && (
        <Paper>
          <div className={classes.errorMsg}>
            <p>{error.error}</p>
          </div>
        </Paper>
      )}

      {loading && <LinearProgress />}
      <Paper>
        <h2>Atualize os dados desse aniversário</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Grid item xs={12}>
            <Controller
              as={TextField}
              control={control}
              rules={{ required: true }}
              className={classes.input}
              type="text"
              id="name"
              name="name"
              fullWidth
              defaultValue={currentData.name}
              variant="outlined"
              placeholder="Aniversariante"
            />
            {errors.name && <p>Campo obrigatório</p>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              as={TextField}
              control={control}
              rules={{ required: true }}
              className={classes.input}
              type="date"
              id="date"
              name="date"
              label="Data do aniversário"
              defaultValue={currentData.date}
            />
            {errors.date && <p>Campo obrigatório</p>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              className={classes.input}
              as={TextField}
              control={control}
              rules={{ required: true }}
              type="text"
              id="gift"
              name="gift"
              fullWidth
              defaultValue={currentData.gift}
              variant="outlined"
              placeholder="Presente"
            />
            {errors.gift && <p>Campo obrigatório</p>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              className={classes.input}
              as={TextField}
              control={control}
              rules={{ required: true }}
              type="text"
              id="location"
              name="location"
              fullWidth
              defaultValue={currentData.location}
              variant="outlined"
              placeholder="Local da festa"
            />
            {errors.location && <p>Campo obrigatório</p>}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Atualizar
            </Button>
          </Grid>
        </form>

      </Paper>
    </Container>
  );
};

export default UpdateForm;
