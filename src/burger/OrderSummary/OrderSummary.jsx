import React, {Component} from 'react';
import Aux from '../../hoc/aux_x';
import Button from '../../components/UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            
            return (
            <li key={igKey}> 
                <span>{igKey} : {this.props.ingredients[igKey]}</span>
            </li>)
        })

    return(
        <Aux>
            <h3>Twoje zamowienie: </h3>
            <ul>
                {ingredientSummary}
            </ul>
            <span>Suma zamowienia: {this.props.price.toFixed(2)} </span> <br/>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>Anuluj</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Złoz zamowienie</Button>
        </Aux>
        )
    }
}


export default OrderSummary;