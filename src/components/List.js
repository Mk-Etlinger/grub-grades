import React from 'react';
import Card from './Card';

const List = ({ restaurants }) => {
    const uniqueIDs = [];
    const uniqueRestaurants = restaurants.filter( rest => {
        let isUnique = false;
        if ( !uniqueIDs.includes( rest.camis )) {
            isUnique = true;
            uniqueIDs.push( rest.camis );
        }
        return isUnique;
    })

    const displayRestaurants = uniqueRestaurants.map( rest => {
        // abstract out to table component
        return (
            <Card key={ rest.camis }
                restaurant={ rest } />
               
        )
    } )
    // console.log(displayRestaurants)
    return ( 
        <div>
            { displayRestaurants }
        </div>
    )
}

export default List;

List.defaultProps = {
    data: [],
}