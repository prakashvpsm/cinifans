import React from 'react'
import PropTypes from 'prop-types'
import items from '../../../src/server/static/data/itemgrps.json';

const LatestMovies = props => {
  return (
    <div className='flex flex-col p-5'>
      <div>Top Movies</div>
      <div>
      {
        items.map((d, i) => {
         return <div>
            
         </div>
        })
      }
      </div>
    </div>
  )
}

LatestMovies.propTypes = {}

export default LatestMovies