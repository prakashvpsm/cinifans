import React from 'react'
import './style.less'

import items from '../../../server/static/data/itemgrps.json';


export default function Slider() {
    return (
        <div className="cf__slider_container" style={{
            backgroundImage: "url(https://cinifansstatic.s3.ap-south-1.amazonaws.com/banner-1)",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="cf__slider_main">
                <div className="cf__slider_main_right">
                    <div className="cf__slider_main_right_bottom_sec">
                        <div className="cf__slider_main_right_bottom_sec_container">
                        <h6 className="cf__slider_main_right_bottom_sec_head">The Expanse <span className="cf__slider_main_right_bottom_sec_head_category">NEW</span></h6>
                        <div className="cf__slider_main_right_bottom_sec_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. In et lectus ac massa finibus condimentum vulputate scelerisque felis. Duis venenatis, urna sit amet commodo faucibus, lorem quam porttitor purus, ac suscipit odio est eget enim</div>
                   
                        </div>
                       </div>
                </div>
                <div className="cf__slider_main_left">
                   <div className="cf__slider_main_left_container">
                   <div className="cf__slider_main_left_head">Fans Favourite</div>

                   {
                        items.slice(0, 5).map((item, i) => {
                            return <div className="cf__slider_top_profile">
                                <div className="cf__slider_top_profile_image">
                                    <img src={item.movie_link} />
                                </div>
                                <div className="cf__slider_top_profile_left">
                                <div className="cf__slider_top_profile_title">
                                    <div className="cf__slider_top_profile_title_head">{item.movie_name}</div>
                                    <div className="cf__slider_top_profile_title_desc">{item.type}</div>
                                </div>
                                <div className="cf__slider_top_profile_trend">
                                    <img src="https://cinifansstatic.s3.ap-south-1.amazonaws.com/top-rated.png" />
                                </div>
                                </div>
                            </div>
                        })
                    }
                   </div>


                </div>
            </div>
        </div>
    )
}
