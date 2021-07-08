import React from 'react'
import items from '../../../server/static/data/itemgrps.json';
import ItemsList from '../../../visual-components/items-list/items-list';

export default function TopAsian() {
    return (
       <ItemsList items={items} title={"Asian"}/>
    )
}
