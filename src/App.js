import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json?'
const APP_TOKEN = '&$$app_token=GXIFIUgqNVwTp36ZIqnkPcnXq'

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
        fetch( BASE_URL + `&$order=grade_date DESC&dba=${ this.state.searchQuery }` + APP_TOKEN )
            .then( resp => resp.json() )
            .then( data => {
                // Need to handle blank responses from API
                this.setState({ restaurantList: [...data] })
            })
            .catch( error => console.log('Error during fetch: ', error))
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
        </div>
        );
    }
}

export default App;
