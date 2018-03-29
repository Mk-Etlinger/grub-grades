import React from 'react';

const Card = ({ restaurant, gradeColor, showViolation, handleClick }) => {
    return (
        <figure style={ cardStyles }>
            <h1 style={ titleStyle }>{ restaurant.dba }</h1>
            <h2 style={{ ...gradeStyle, background: gradeColor[restaurant.grade] }}>{ restaurant.grade }</h2>
            <h4 style={ addressStyle }>
                { restaurant.building + ' ' + restaurant.street + ' ' }
                &#8226; { restaurant.boro }
            </h4>
            <div style={ violationStyle }>
                { showViolation || 
                    <button style={ buttonStyle } onClick={ handleClick }>
                        Latest Violation
                    </button> }
                { showViolation && 
                    <div>
                        <h4>{ restaurant.critical_flag }</h4>
                        <p>{ restaurant.violation_description }</p>
                    </div>
                }
            </div>
        </figure>
    )
}

export default Card;

const cardStyles =  {
    display: 'grid',
    gridTemplateColumns: '20% 40% 40%',
    gridTemplateRows: '20% 80%',
    boxShadow: '-4px 4px 6px lightGrey', 
    border: '1px solid lightGrey',
    padding: '1em',
    margin: '2em 6em 0 6em',
    background: 'white',
}

const gradeStyle =  {
    fontSize: '8em',
    gridArea: '1 / 1 / 2 / 2' ,
    margin: '10px 10px 10px 0',
    boxShadow: '-4px 2px 10px lightGrey', 
    border: '1px solid lightGrey',
    padding: '0',
    order: '-1'
}

const titleStyle =  {
    gridColumn: '2 / 4',
    marginRight: '40%',
    fontSize: '3em',
}

const addressStyle =  {
    gridArea: '2 / 2 / 3 / 2',
    textAlign: 'center',
}

const violationStyle =  {
    gridArea: '2 / 3 / 3 / 3'
}

const buttonStyle = {
    fontSize: '1em',
    borderRadius: '10px',
    color: '#ffffff',
    background: '#a8a8a8',
    padding: '10px 20px 10px 20px',
}