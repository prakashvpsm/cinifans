import React, { Component } from 'react';
import Link from 'next/link';
import './style.less';

class Footer extends Component {
  render() {
    return (
      <footer className='cf__footer'>
        <div className="cf__footer_top">
        <div className="cf__footer_top_about">
        <img src={'/images/logowhite.png'} alt='Home' className="gc__header_logo"></img>
        <div className="cf__footer_top_about_dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies congue odio ac blandit. Maecenas sapien mi, efficitur at dapibus in, vulputate eu urna.</div>
        </div>
        <div className='cf__footer_top_links'>
          <Link as='/about' href='/about'>
            <a>About</a>
          </Link>
          <div className="cf__footer_border-right"></div>
          <Link as='/about' href='/about'>
            <a>Help</a>
          </Link>
          <div className="cf__footer_border-right"></div>

          <Link as='/about' href='/about'>
            <a>Privacy</a>
          </Link>
          <div className="cf__footer_border-right"></div>

          <Link as='/about' href='/about'>
            <a>Terms</a>
          </Link>
        </div>

        </div>
        <div className='cf__footer_bottom'>
          <div className='copyright'>© 2021 All rights reserved</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
