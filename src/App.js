import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json?'
const APP_TOKEN_PARAMS = '$$app_token='

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
        fetch( BASE_URL + `$order=grade_date DESC&dba=${ this.state.searchQuery }` )
            .then( resp => resp.json() )
            .then( data => this.setState({ restaurantList: [...data] }))
    }
    
    handleOnChange = ( e ) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        return (
        <div className="App">
            <Header />
            <Search handleOnSearchCB={ this.handleSearch } onChangeCB={ this.handleOnChange } />
        </div>
        );
    }
}

export default App;
