import React from 'react';

import CardsWithHeader1 from '../../visual-components/cards/cardWithHeader1';
import items from '../../server/static/data/itemgrps.json';
import LayerType1 from '../../visual-components/layers/layerType1';

export default function TopMovies() {

    const filterMovies = items.filter((d, i) => d.type == "movie")

    return (
            <CardsWithHeader1 headName="Top Movies">
                {
                    filterMovies.map((item, i) => {
                        return <LayerType1 key={i} src={item.movie_link} name={item.movie_name} type={item.type} ratingCount={item.userRating} likes={item.userRating} basePath="top-movies"/>
                    })
                }
            </CardsWithHeader1>
    )
}
