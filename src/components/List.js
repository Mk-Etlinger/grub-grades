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
            <p style={ notFoundStyle }>Restaurant not found!</p>
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

const notFoundStyle = {
    fontSize: '1.5em',
    color: 'red',
    fontFamily: 'monospace',
}