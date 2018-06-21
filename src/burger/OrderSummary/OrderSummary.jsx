import React from 'react';

import Aux from '../../hoc/aux_x';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            
            return (
            <li key={igKey}> 
                <span>{igKey} : {props.ingredients[igKey]}</span>
            </li>)
        })

    return (
        <Aux>
            <h3>Twoje zamowienie: </h3>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}

export default orderSummary;