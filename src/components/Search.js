import React from 'react';

const Search = ({ handleOnSearchCB, onChangeCB, placeholder, value }) => {
    return ( 
        <div> 
            <h1 style={ h1Style }>Enter your favorite NYC restaurant:</h1>
            <form onSubmit={ handleOnSearchCB }>
                <input type="text"
                    value={ value }
                    style={ searchStyle }
                    onChange={ onChangeCB }  
                    placeholder={ placeholder } />
                <input style={ buttonStyle } type="submit" value='Search' />
            </form>
        </div>
    )
}

export default Search;

const searchStyle = {
    width: '50%',
    fontSize: '2em',
    padding: '10px',
    margin: '7px',
    borderRadius: '10px',
    boxShadow: '-8px 1px 8px lightGrey',

}

const h1Style = {
    marginRight: '20%',
}

const buttonStyle = {
    fontSize: '2em',
    borderRadius: '10px',
    color: '#ffffff',
    background: '#5ca880',
    padding: '10px 20px 10px 20px',
    boxShadow: '-2px 2px 6px lightGrey',
}