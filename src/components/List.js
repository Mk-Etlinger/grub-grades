import React from 'react';
import Card from './Card';
import { uniqueResults } from '../utilities/uniqueResults';

const List = ({ restaurants, isSearching }) => {
    const uniqueRestaurants = uniqueResults( restaurants )

    const displayRestaurants = uniqueRestaurants.map( rest => {
        return (
            <Card key={ rest.camis }
                restaurant={ rest } />
        )
    })

    const displayNotFoundMessage = (
        isSearching && 
            !displayRestaurants.length &&
            "Restaurant not found"
    )
    return ( 
        <div>
            { displayRestaurants } 
            { displayNotFoundMessage }
        </div>
    )
}

export default List;

List.defaultProps = {
    data: [],
}