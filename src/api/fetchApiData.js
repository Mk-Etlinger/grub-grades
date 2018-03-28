const fetchApiData = ( url ) => {
    return ( 
        fetch( url )
        .then( resp => resp.json() )
        .catch( error => console.log( 'Error during fetch: ', error ))
    )
}

export default fetchApiData;