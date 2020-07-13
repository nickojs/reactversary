import React, { useState } from 'react';

import { Title, InnerContainer, Card } from '../../generalStyles';
import Forms from './forms/forms';

const Auth = () => {
  const [index, setIndex] = useState(0);

  const types = [{
    name: 'sign in',
    index: 0
  }, {
    name: 'log in',
    index: 1
  }, {
    name: 'forgot password',
    index: 2
  }];

  const changeFormType = (i) => setIndex(i);

  const menu = (
    <ul>
      {types.map((each) => (
        <li key={each.index}>
          <button
            type="button"
            onClick={() => changeFormType(each.index)}
          >
            {each.name}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {menu}
      <Card>
        <InnerContainer>
          <Forms index={index} />
        </InnerContainer>
      </Card>
    </>
  );
};

export default Auth;
