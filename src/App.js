import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import { capitalizeString } from './utilities/capitalizeString'
import './App.css';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json?'
const APP_TOKEN = '&$$app_token=GXIFIUgqNVwTp36ZIqnkPcnXq'
const QUERIES = '&$order=grade_date DESC&$where=GRADE IS NOT NULL'

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
        const capitalizedQuery = capitalizeString(this.state.searchQuery)

        fetch( BASE_URL + `dba=${ capitalizedQuery }` + QUERIES + APP_TOKEN )
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
