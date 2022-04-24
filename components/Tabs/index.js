import React, { useState } from 'react'

export default function Tabs({ items, alignItms }) {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            {
                items.length > 0 ? <div className={`flex flex-col gap-8 ${alignItms ? alignItms : ''}`}>
                    <div className='flex items-center gap-8 justify-center'>
                        {
                            items.map((item, i) => {
                                return <div 
                                className={`${selected === i ? 'border-b-4 border-primary' : ''} pb-2 text-xs uppercase text-gray-800 font-semibold cursor-pointer`}
                                onClick={() => setSelected(i)}>{item.label}</div>
                            })
                        }
                    </div>
                    <div>
                        {
                            items[selected].content ? items[selected].content() : 'No content availabe'
                        }
                    </div>
                </div> : <div>No items to display</div>
            }

        </div>
    )
}
