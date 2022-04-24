import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    return (
      <footer className='w-full bg-primary flex flex-col p-4 gap-12'>
        <div className=" flex items-center justify-center flex-col w-full gap-6 p-5">
          <div className="w-full text-center flex flex-col gap-6">
            <img src={'/images/logowhite.png'} alt='Home' className="w-40 mx-auto text-center"></img>
            <div className="text-gray-400 text-xs w-3/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies congue odio ac blandit. Maecenas sapien mi, efficitur at dapibus in, vulputate eu urna.</div>
          </div>
          <div className='flex items-center text-gray-300 gap-3 text-sm'>
            <Link as='/about' href='/about'>
              <a  className="hover:border-b border-white">About</a>
            </Link>
            <div className="cf__footer_border-right"></div>
            <Link as='/about' href='/about'>
              <a  className="hover:border-b border-white">Help</a>
            </Link>
            <div className="cf__footer_border-right"></div>

            <Link as='/about' href='/about'>
              <a  className="hover:border-b border-white">Privacy</a>
            </Link>
            <div className="cf__footer_border-right"></div>

            <Link as='/about' href='/about'>
              <a  className="hover:border-b border-white">Terms</a>
            </Link>
          </div>

        </div>
        <div className='cf__footer_bottom text-white text-sm'>
          <div className='copyright text-center'>© 2021 All rights reserved</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
