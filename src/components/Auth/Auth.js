import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Form from './form';
import { setAuth } from '../../store/actions/user';

import config from './config.json';
import useRequest from '../../hooks/request';

const Auth = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);

  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  const optionsHandler = (opts) => setOptions({
    method: 'POST',
    baseURL: `http://${process.env.REACT_APP_BACKEND}:5000/auth/`,
    url: opts.url,
    data: opts.data
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      console.log('useffect');
      const payload = jwt.decode(data.token);
      console.log(payload);
      dispatch(setAuth({
        token: data.token,
        ...payload
      }));
    }
  }, [dispatch, data]);

  const forms = Object.keys(config);

  console.log(requestData);

  return (
    <Container>
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
            <Form config={config[each]} setOptions={optionsHandler} />
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Auth;
