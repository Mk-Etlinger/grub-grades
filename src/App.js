import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import { upcaseString } from './utilities/upcaseString';
import { queryFormatter } from './utilities/queryFormatter';
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
        const encodedURI = queryFormatter( this.state.searchQuery )
        fetch( encodedURI )
        .then( resp => resp.json() )
        .then( data => {
            this.setState({ restaurantList: [...data] })
        })
        .catch( error => console.log( 'Error during fetch: ', error ))
        this.setState({ isSearching: true });
    }
    
    handleOnChange = ( e ) => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        // console.log()
        return (
            <div className="App">
                <Header />
                <Search value={ this.state.searchQuery }
                    handleOnSearchCB={ this.handleSearch } 
                    onChangeCB={ this.handleOnChange } />
                <List restaurants={ this.state.restaurantList }
                    isSearching={ this.state.isSearching }
                    hasResults={ this.state.hasResults } />
            </div>
        );
    }
}

export default App;
