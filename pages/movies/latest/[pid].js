import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import items from '../../../src/server/static/data/itemgrps.json';

const LatestMoviesById = props => {
    const router = useRouter()
    const { pid } = router.query;

    const selectedIdem = items.filter(d => d.id == pid);

  return (
    <div>{
        selectedIdem && selectedIdem.length > 0 ? <div>
           <div>{selectedIdem[0].movie_name}</div>
           <div>{selectedIdem[0].description}</div>
        </div> : <div>something went wrong</div>}</div>
  )
}

LatestMoviesById.propTypes = {}

export default LatestMoviesById