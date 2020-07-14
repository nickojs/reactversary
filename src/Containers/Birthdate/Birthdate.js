import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CakeIcon from '@material-ui/icons/Cake';
import ListIcon from '@material-ui/icons/List';

import { useStyles } from './styles';

import Register from '../../components/register/register';
import BirthdatesList from '../../components/birthdatesList/birthdatesList';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CakeIcon />
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  cadastrar aniversario
                </Typography>
                <Register />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
                <ListIcon />
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  listar aniversarios
                </Typography>
                <BirthdatesList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
