import React from 'react';
import CardContainer from './CardContainer';
import { uniqueResults } from '../utilities/uniqueResults';

const List = ({ data, isSearching }) => {
    const uniqueRestaurants = uniqueResults( data )

    const displayRestaurants = uniqueRestaurants.map( rest => {
        return (
            <CardContainer key={ rest.camis }
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