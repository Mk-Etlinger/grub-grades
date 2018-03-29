const API_URL = process.env.REACT_APP_API_URL
const API_TOKEN = `&$$app_token=${ process.env.REACT_APP_API_TOKEN }`

export const queryFormatter = ( restaurantName ) => {
    const formattedQuery = replaceQuotes( restaurantName.toUpperCase() ),
        queries = whereNameLikeParams( formattedQuery ) + 
            gradeNotNull +
            orderByParams +
            API_TOKEN

    return encodeURI( API_URL + queries )
}

const whereNameLikeParams = ( restaurantName ) => (
    `$where=dba LIKE '%${ restaurantName }%' `
)

const gradeNotNull = 'AND grade IS NOT NULL'

const orderByParams = '&$order=grade_date DESC'

const replaceQuotes = ( query ) => query.replace(/'/g, "''")