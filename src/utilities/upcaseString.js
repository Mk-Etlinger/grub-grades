export const upcaseString = ( string ) => {
    return string.replace( /\w/g, char => char.toUpperCase() )
}