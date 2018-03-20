export const capitalizeString = ( string ) => {
    return string.replace( /\w/g, char => char.toUpperCase() )
}