import { upcaseString } from './upcaseString';

const API_URL = process.env.REACT_APP_API_URL
const API_TOKEN = `&$$app_token=${ process.env.REACT_APP_API_TOKEN }`

export const queryFormatter = ( restaurantName ) => {
    const upperCasedName = upcaseString( restaurantName ),
        queries = whereParams( replaceQuotes( upperCasedName )) + orderByParams + API_TOKEN

    return encodeURI( API_URL + queries )
}

const whereParams = ( restaurantName ) => (
    `$where=dba LIKE '%${ restaurantName }%' AND grade IS NOT NULL`
)

const orderByParams = '&$order=grade_date DESC'

const replaceQuotes = ( query ) => query.replace(/'/g, "''")