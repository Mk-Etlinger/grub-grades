export const uniqueResults = ( restaurants, uniqueIDs = [] ) => (
    restaurants.filter( restaurant => {
        let isUnique = false;
        if ( !uniqueIDs.includes( restaurant.camis )) {
            isUnique = true;
            uniqueIDs.push( restaurant.camis );
        }
        return isUnique;
    })
)