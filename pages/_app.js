import React from 'react';
import App from 'next/app';
import Layout from '../src/visual-components/layout';
import { wrapper } from '../src/store';

import './styles/global.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default wrapper.withRedux(MyApp);
