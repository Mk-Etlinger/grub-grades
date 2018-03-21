import React from 'react';

const List = ({ restaurants }) => {
    const uniqueIDs = [];
    const uniqueRestaurants = restaurants.filter( rest, i => {
        let isUnique = false;
        if ( !uniqueIDs.includes( rest.camis )) {
            isUnique = true;
            uniqueIDs.push( rest.camis );
        }
        return isUnique
    })

    const displayRestaurants = uniqueRestaurants.map( rest => {
        // abstract out to table component
        return (
            <div key={ rest.camis }>
                <h1>{ rest.dba }</h1>
                <h2>{ rest.grade }</h2>
                <h4>{ rest.building + ' ' + rest.street }</h4>
                <h4>{ rest.boro }</h4>
                <h4>{ rest.violation_description }</h4>
                <h4>{ rest.critical_flag }</h4>
            </div>
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