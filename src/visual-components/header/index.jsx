import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './style.less';

const menus=[
  {
    name : "Latest from fans",
    path : '/latest',

},
  {
      name : "Movies",
      path : '/movies',

  },
  {
      name : "Dramas",
      path : '/dramas',
      
  },
  {
      name : "Music",
      path : '/music',
      
  },
  {
    name : "Actors",
    path : '/actors'
    
}
]

class Header extends Component {
  render() {
    return (
      <header className='header-component'>
       
        <div className="gc__header">
        <div className='home'>
          <Link as='/' href='/'>
            <a href='/'>
              <img src={'/images/logo.png'} alt='Home' className="gc__header_logo"></img>
            </a>
          </Link>
        </div>
        <div className="header-menus">
        <div className="gc__header__left--menu">
                {
                    menus.map((menu, i) => {
                        return <div className="gc__header__left--menu--item" key={`header${i}`}>
                                <Link as={menu.path} href={menu.path}>{menu.name}</Link>
                        </div>
                    })
                }
            </div>
        </div>
       
        </div>
      
      
      </header>
    );
  }
}

export default Header;
