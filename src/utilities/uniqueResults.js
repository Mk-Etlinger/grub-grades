export const uniqueResults = ( restaurants, uniqueIDs = [] ) => (
    restaurants.filter( rest => {
        let isUnique = false;
        if ( !uniqueIDs.includes( rest.camis )) {
            isUnique = true;
            uniqueIDs.push( rest.camis );
        }
    return isUnique;
    })
)