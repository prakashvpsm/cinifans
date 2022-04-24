import React from 'react'

import items from '../../server/static/data/itemgrps.json'
import { likepng, starPng } from '../../visual-components/shared/imgURIS';

const CardDetails = (data) => {
    return  <div className='bg-gray-100 flex flex-col gap-4 py-4 w-1/3 rounded'>{
        items.map((d, i) => {
            return <div className='cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:scale-110 rounded'>
                <div className='flex h-36'>
                    <img className=' w-2/6' src={d.movie_link} />
                    <div className='flex flex-col w-4/6 px-3 h-full'>
                        <h2 className='text-primary font-bold'>{d.movie_name}</h2>
                        {
                            d.description ? <p className='text-xs mt-4'>{d.description.substring(0, 100) + '...'}</p> : <></>
                        }
                        <div className='flex items-center  gap-4 mt-auto ml-auto mb-2'>
                            <div className='flex items-center gap-1 text-xs'>
                                <img src={starPng} className="w-4 h-4"/>
                                <div>{d.userRating}</div>
                            </div>
                            <div className='bg-primary rounded inline-flex px-3 py-1 text-xs text-themeBg font-semibold'>{d.type}</div>
                        </div>
                    </div>

                </div>
            </div>
        })
    }</div>
}

export default function WhatsInCini() {
    return (
        <div className='p-4 rounded'>
            <div >
                <div className='border-b border-secondaryAlt'>
                    <div className='bg-secondaryAlt inline-flex p-2 text-xs text-themeBg font-bold'>New Release across globe</div>

                </div>
                <div className=' flex items-center mt-4 gap-5'>
                    <CardDetails data={items}/>
                    <CardDetails data={items}/>
                    <CardDetails data={items}/>
                </div>
            </div>
            <div></div>
        </div>
    )
}
