import React from 'react'

import './style.less';

export default function NewAndUpComing({title, items}) {
    return (
        <div className="cf__home__item_list">

            <div className="cf__home__item_list_head">{title}</div>
            <div className="cf__home__item_list_items">
                <div className="cf__home__item_list_items_container">
                {
                        items.slice(0, 5).map((item, i) => {
                            return <div className="cf__home__item_list_item">
                                <div className="cf__home__item_list_item_image">
                                    <img src={item.movie_link} />
                                </div>
                                <div className="cf__home__item_list_item_bottom">
                                <div className="cf__home__item_list_item_bottom_head">{item.movie_name}</div>
                                    <div className="cf__home__item_list_item_bottom_type">{item.type}</div>
                               
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
            
        </div>
    )
}
