import React, { Component } from 'react';
import Header from '../header';
import FlashScroll from '../flash-scroll';
import SearchArea from '../search-area';
import Footer from '../footer';

import '../shared/base.less';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FlashScroll />
        <SearchArea />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
