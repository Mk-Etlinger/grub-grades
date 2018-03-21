import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import { capitalizeString } from './utilities/capitalizeString'
import './App.css';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json?'
const APP_TOKEN = '&$$app_token=GXIFIUgqNVwTp36ZIqnkPcnXq'
const QUERY = ( query ) => `$where=dba LIKE '%${ query }%' AND grade IS NOT NULL&$order=grade_date DESC`

class App extends Component {
    constructor(){
        super()

        this.state = {
            searchQuery: '',
            restaurantList: [],
        }
    }

    handleSearch = ( e ) => {
        e.preventDefault();
        const upperCasedQuery = capitalizeString(this.state.searchQuery),
            url = QUERY( upperCasedQuery ) + APP_TOKEN
        
        fetch( encodeURI( BASE_URL + url ))
            .then( resp => resp.json() )
            .then( data => {
                // Need to handle blank responses from API
                this.setState({ restaurantList: [...data] })
            })
            .catch( error => console.log( 'Error during fetch: ', error ))
    }
    
    handleOnChange = ( e ) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        // console.log(this.state.restaurantList)
        return (
        <div className="App">
            <Header />
            <Search value={ this.state.searchQuery }
                handleOnSearchCB={ this.handleSearch } 
                onChangeCB={ this.handleOnChange } />
            <List restaurants={ this.state.restaurantList }/>
        </div>
        );
    }
}

export default App;
