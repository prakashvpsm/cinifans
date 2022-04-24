import React, { Component } from 'react';
import Header from '../header';
import FlashScroll from '../flash-scroll';
import SearchArea from '../search-area';
import Footer from '../footer';

class Layout extends Component {
  render() {
    return (
      <div className="bg-themeBg flex flex-col h-screen">
        <div className='fixed left-0 right-0 top-0 h-16'>
          <Header />
        </div>
        <div className='mt-16 bg-themeBg flex-grow m-0'>
          <main>{this.props.children}</main>
        </div>
        {/* <FlashScroll />
        <SearchArea /> */}

        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
