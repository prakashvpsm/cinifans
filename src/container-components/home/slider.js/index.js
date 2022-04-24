import React from 'react'
import Slider from "react-slick";
import items from '../../../server/static/data/itemgrps.json';

export default function SliderHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="bg-cover bg-no-repeat w-full">
            <Slider {...settings}>
                {
                    items.map((d, i) => {
                        return <div>
                            <div
                             className='h-80'
                             style={{
                                background: "url(https://cinifansstatic.s3.ap-south-1.amazonaws.com/banner-1)",
                                width: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}>
                                {d.movie_name}dsdfgfd
                            </div>

                        </div>
                    })
                }
            </Slider>
        </div>
    )
}
