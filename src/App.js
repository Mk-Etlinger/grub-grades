import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import { queryFormatter } from './utilities/queryFormatter';
import fetchApiData from './api/fetchApiData';
import './css/App.css';

class App extends Component {
    constructor(){
        super()

        this.state = {
            searchQuery: '',
            restaurantList: [],
            isSearching: false,
        }
    }

    handleSearch = ( e ) => {
        e.preventDefault();
        const encodedURI = queryFormatter( this.state.searchQuery );

        fetchApiData( encodedURI )
            .then( jsonData => this.setState({ restaurantList: [...jsonData], isSearching: true }))
        
    }
    
    handleOnChange = ( e ) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        return (
            <div className="App">
                <Header title='Grub Grades' />
                <Search placeholder='E.g: Cafe Mogador, Bunna Cafe'
                    value={ this.state.searchQuery }
                    handleOnSearchCB={ this.handleSearch } 
                    onChangeCB={ this.handleOnChange } />
                <List data={ this.state.restaurantList }
                    isSearching={ this.state.isSearching } />
            </div>
        );
    }
}

export default App;
