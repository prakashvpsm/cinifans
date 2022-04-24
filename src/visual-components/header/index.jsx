import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

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
      <header className='header-component h-full'>
       
        <div className="gc__header  bg-primary w-full flex items-center h-full px-4">
        <div className='home'>
          <Link as='/' href='/'>
            <a href='/'>
              <img src={'/images/logowhite.png'} alt='Home' className="w-36"></img>
            </a>
          </Link>
        </div>
        <div className="header-menus ml-auto">
        <div className="gc__header__left--menu flex items-center gap-4">
                {
                    menus.map((menu, i) => {
                        return <div className="text-themeBg text-sm" key={`header${i}`}>
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
