import React, { Component } from 'react'
import Aux from '../../hoc/aux_x'
import Burger from '../../burger/Burger'
import BurgerControls from '../../burger/BuildControls/BuildControls'

const INGREDIENS_PRICE = {
  salad: 0.4,
  bacon: 1,
  cheese: 0.3,
  meat: 1.5
}
export default class BurgerBuilder extends Component {
  state = {
    ingrediens: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingrediens[type];
    const updateCount = oldCount + 1;
    const updateIngrediens = {
      ...this.state.ingrediens
    }
    updateIngrediens[type] = updateCount;

    const priceAddition = INGREDIENS_PRICE[type];
    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingrediens: updateIngrediens})
  }

  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingrediens[type];
    if( oldCount <= 0) return;
    // console.log(oldCount)
    const updateCount = oldCount - 1;
    const updateIngrediens = {
      ...this.state.ingrediens
    }
    updateIngrediens[type] = updateCount;

    const priceDedaction = INGREDIENS_PRICE[type];
    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice - priceDedaction;

    this.setState({ totalPrice: newPrice, ingrediens: updateIngrediens})

  }


  render() {
    const disabledInfo = {
      ...this.state.ingrediens
    }

    for(let key in disabledInfo ){
        disabledInfo[key] = disabledInfo[key] <= 0 ;
    }

    console.log(disabledInfo)
    return (

        <Aux>
            <Burger ingrediens={this.state.ingrediens} />
            <BurgerControls  
              ingredientAdded={this.addIngredientHandler} 
              removeIngredient={this.removeIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              />
        </Aux>
    )
  }
}
