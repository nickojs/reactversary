/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import LinearProgress from '@material-ui/core/LinearProgress';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const Form = ({ config, setOptions, requestData }) => {
  const classes = useStyles();

  const { meta, inputs } = config;
  const { control, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const submitHandler = (data) => setOptions({
    data,
    url: meta.url
  });

  const { error, loading } = requestData;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {error
        && Object.keys(error.errors)
          .map((each) => (
            <Paper>
              <div className={classes.errorMsg}>
                <p>{error.errors[each].join(', ')}</p>
              </div>
            </Paper>
          ))}

      {loading && <LinearProgress />}
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          {meta.icon === 'account' ? <AccountCircleIcon />
            : meta.icon === 'login' ? <LockOutlinedIcon />
              : meta.icon === 'token' ? <VpnKeyIcon />
                : null }
        </Avatar>
        <Typography component="h1" variant="h5">
          {meta.name}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(submitHandler)}
        >
          <Grid container spacing={2}>
            {Object.keys(inputs).map((each) => (
              <Grid item key={each} xs={12}>
                <Controller
                  as={TextField}
                  control={control}
                  rules={{ required: true }}
                  id={inputs[each].id}
                  name={inputs[each].name}
                  type={inputs[each].type}
                  label={inputs[each].label}
                  fullWidth
                  variant="outlined"
                  defaultValue=""
                  placeholder={inputs[each].placeholder}
                />
                <p key={each}>{errors[each]?.type === 'required' && `${each} is required`}</p>
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={Object.keys(errors).length > 0}
            className={classes.submit}
          >
            {meta.name}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
