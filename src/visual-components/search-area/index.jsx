import React from 'react'
import SocialLinks from './social-links';

import './style.less'

export default function SearchArea() {
  return (
    <div className="cf__search_header">
      <div className="cf__search_header_right"></div>
      <div className="cf__search_header_left">
        <div className="cf__search_header_left_search">
          <div className="">
            <SocialLinks />
          </div>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}
