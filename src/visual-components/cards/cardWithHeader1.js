import React from 'react';

import './styles/cardwithHeader1.less'

export default function CardWithHeader1({children, headName}) {
    return (
        <div className="cf__cardWithheader_main">
            <div className="flex items-center cf__cardWithheader_header">
                {/* <div className="cf__side_bar_small"></div> */}
                <h6>{headName}</h6>
            </div>
            <div className="cf__cardWithheader_body">
                    {children}
            </div>
        </div>
    )
}
