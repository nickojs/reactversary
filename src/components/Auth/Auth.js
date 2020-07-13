import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import config from './config.json';
import Form from './form';

const Auth = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);

  const forms = Object.keys(config);

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
            <Form config={config[each]} />
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  );
};

export default Auth;
