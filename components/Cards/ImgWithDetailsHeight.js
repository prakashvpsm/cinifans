import React from 'react';
import { starPng } from '../../src/visual-components/shared/imgURIS';

export default function ImgWithDetailsHeight({ data, ottImg }) {
    console.log(data, 'daaaayya');
    console.log(data.userRating, 'data.userRating')
    return (
        <div className='bg-primary w-44 shadow-lg'>
            <div className=''>
                <img className='w-44 h-52' src={data.movie_link} alt={data.movie_name} />
            </div>
            <div className='text-xs text-gray-100 flex flex-col'>
                <div className='p-2'>
                    <div className='uppercase py-2 text-center font-semibold'>
                        {data.movie_name}
                    </div>
                    <div className='text-xs flex items-center justify-center gap-2 py-2'>
                        {
                            [...Array(data.userRating)].map(d => {
                                return <img className='w-4 h-4' src={starPng} alt="rating"/>
                            })
                        }
                    </div>
                </div>
                <div className='mt-auto bg-white text-center border-b-2 border-x-2 border-secondaryAlt py-2'>
                    <button>
                        <img className='w-10 h-6' src={ottImg} alt={'ott'} />
                    </button>
                </div>
            </div>
        </div>
    )
}
