/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Form from '../../components/login/form';
import { setAuth } from '../../store/actions/user';

import config from '../../components/login/config.json';
import useRequest from '../../hooks/request';

const Auth = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);

  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data } = requestData;

  const optionsHandler = (opts) => setOptions({
    method: 'POST',
    baseURL: `http://${process.env.REACT_APP_BACKEND}:5000/auth/`,
    url: opts.url,
    data: opts.data
  });

  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState({
    should: false,
    path: null
  });

  useEffect(() => {
    if (data) {
      const payload = jwt.decode(data.token);
      dispatch(setAuth({
        auth: true,
        token: data.token,
        ...payload
      }));
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (data && options.url === 'login') {
      setRedirect({
        should: true,
        path: options.url
      });
    }
  }, [data, options]);

  const forms = Object.keys(config);

  return (
    <Container>
      {redirect.should && <Redirect to="/dashboard" />}
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            onChange={handleChange}
            centered
            aria-label="authentication menus"
          >
            {forms.map((each, i) => (
              <Tab key={i} label={each} value={String(i)} />
            ))}
          </TabList>
        </AppBar>
        {forms.map((each, i) => (
          <TabPanel key={i} value={String(i)}>
            <Form
              config={config[each]}
              setOptions={optionsHandler}
              requestData={requestData}
            />
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Auth;
