import React from 'react';
import Aux from '../../hoc/aux_x';
import Button from '../../components/UI/Button/Button'

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
            <span>Suma zamowienia: {props.price.toFixed(2)} </span> <br/>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Anuluj</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Złoz zamowienie</Button>
        </Aux>
    )
}

export default orderSummary;