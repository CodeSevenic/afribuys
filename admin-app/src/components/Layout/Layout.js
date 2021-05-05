import React from 'react';
import Header from '../Header/Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
