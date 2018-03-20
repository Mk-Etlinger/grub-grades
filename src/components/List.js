import React from 'react';

const List = ({ restaurants }) => {

    const uniqueRestaurants = restaurants.filter(( rest, i ) => {
        return i > 0 ? restaurants[i - 1].camis !== rest.camis : rest
    })
    console.log(uniqueRestaurants)

    const displayRestaurants = uniqueRestaurants.map( rest => {
        // abstract out to table component
        return (
            <div>
                <h1>{ rest.dba }</h1>
                <h2>{ rest.grade }</h2>
                <h4>{ rest.building + ' ' + rest.street }</h4>
                <h4>{ rest.boro }</h4>
            </div>
        )
    } )
    console.log(displayRestaurants)
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