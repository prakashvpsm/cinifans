import React from 'react';
import Link from 'next/link';


const socialGrp = [
    {
        name : 'facebook',
        iconLink : '/images/icons/facebook.png',
        link:''
    },
    {
        name : 'twitter',
        iconLink : '/images/icons/twitter.png',
        link:''
    },
    {
        name : 'youtube',
        iconLink : '/images/icons/youtube.png',
        link:''
    },
    {
        name : 'insta',
        iconLink : '/images/icons/instagram.png',
        link:''
    }
]

export default function SocialLinks() {
    return (
        <div className="cf__search_header_social_links">
            {
                socialGrp.map((s, i) => {
                    return <Link as={s.link} href={s.link}>
                        <img src={s.iconLink} />
                    </Link>
                })
            }
        </div>
    )
}
