import React from 'react'
import ImgWithDetailsHeight from '../../../components/Cards/ImgWithDetailsHeight';
import Tabs from '../../../components/Tabs';
import datas from '../../server/static/data/itemgrps.json';
import netflix from '../../../public/images/otts/netflix.png';
import prime from '../../../public/images/otts/prime.png';
import voot from '../../../public/images/otts/voot.jpg';



export default function NewOnOtts() {

    const content = (img) => {
        return <div className='flex items-center gap-8'>
            {
                datas.map((d, i) => {
                    return <ImgWithDetailsHeight data={d} ottImg={img}/>
                })
            }
        </div>
    }

    const items = [
        {
            label : 'Netflix',
            content : () => {
                return <div>
                    {content(netflix)}
                </div>
            }
        },
        {
            label : 'Prime',
            content : () => {
                return <div>
                    {content(prime)}
                </div>
            }
        },
        {
            label : 'Voot',
            content : () => {
                return <div>
                    {content(voot)}
                </div>
            }
        }
    ]
  return (
    <div className='p-4'>
        <div className='border-l-8 border-secondaryAlt flex items-center p-2 text-primary font-semibold'>New on OTT's'</div>
        <div className='py-5'>
            <Tabs items={items} alignItms="justify-center"/>
        </div>
    </div>
  )
}
