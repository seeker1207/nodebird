import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';

import wrapper from '../store/configureStore';

const NodeBird = function ({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>NodeBird</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component />
    </>

  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
