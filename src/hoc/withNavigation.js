/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withNavigation = (WrappedComponent) => (props) => {
  const { isAuth } = useSelector((state) => state.user);

  if (isAuth) {
    return (<WrappedComponent {...props} />);
  }

  return <Redirect to="/" />;
};

export default withNavigation;
