import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import { queryFormatter } from './utilities/queryFormatter';
import fetchApiData from './api/fetchApiData';
import './App.css';

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
            .then( data => this.setState({ restaurantList: [...data], isSearching: true }))
        
    }
    
    handleOnChange = ( e ) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        // console.log()
        return (
            <div className="App">
                <Header title='Grub Grades' />
                <Search value={ this.state.searchQuery }
                    handleOnSearchCB={ this.handleSearch } 
                    onChangeCB={ this.handleOnChange } />
                <List data={ this.state.restaurantList }
                    isSearching={ this.state.isSearching } />
            </div>
        );
    }
}

export default App;
