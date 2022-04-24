import React from 'react';
import { likepng, starPng } from '../shared/imgURIS';
import Link from 'next/link';

export default function LayerType1({src, name, type, ratingCount, likes, key, basePath}) {
    return (
        <div className="cf__layerType1_main">
            <Link href={`/${basePath}/${key}`}>
            <div className="flex item-center">
                <div className="cf__layerType1_profile_img">
                    <img src={src} className=""/>
                </div>
                <div className="cf__layerType1_profile_name">
                    <div className="cf__layerType1_profile_name_head">{name}</div>
                    <div className="flex item-center">
                        <div className="cf__layerType1_profile_name_type">{type}</div>
                        <div className="flex item-center cf__layerType1_profile_rating">
                    {
                        Array.from(Array(ratingCount), (e, i) => {
                            return <img src={starPng} key={i}/>
                          })
                    }
                </div>
                    </div>
                  
                </div>
             
                <div className="flex item-center cf__layerType1_profile_likes">
                    <img src={likepng} />
                    <p>{likes}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}
