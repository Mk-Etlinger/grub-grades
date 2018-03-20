import React from 'react';

const Search = ({ handleOnSearchCB, onChangeCB, value }) => {
    return ( 
        <div>
            <h1>Enter your favorite restaurant:</h1>
            <form onSubmit={ handleOnSearchCB }>
                <input type="text" 
                    onChange={ onChangeCB } 
                    value={ value } 
                    placeholder='E.g: Cafe Mogador, Bunna Cafe' />
                <input type="submit" value='Search' />
            </form>
        </div>
    )
}

export default Search;