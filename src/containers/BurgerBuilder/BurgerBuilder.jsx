import React, { Component } from 'react'
import Aux from '../../hoc/aux_x'
import Burger from '../../burger/Burger'
import BuildControls from '../../burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../burger/OrderSummary/OrderSummary'

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
    totalPrice: 0,
    purchase: false,
    purchasing: false
  }

  updatePurchase = (ingrediens) => {
    
    const sum = Object.keys(ingrediens)
      .map(igKey => {
        return ingrediens[igKey]
    })
      .reduce((sum, el) => {
        return  sum + el;
      }, 0)
    this.setState({ purchase: sum > 0})
  }

  purchasingHandler = () =>{
    
    this.setState({ purchasing: true})

    // const trigger = this.state.purchasing;
    //  console.log(trigger)
    // this.setState({ purchasing: !trigger})
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
    this.updatePurchase(updateIngrediens);
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
    this.updatePurchase(updateIngrediens);
  }

  closeModalHandler = () => {
    this.setState({ purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('Woo, your order is succesful! :-)')
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
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
          <Modal show={this.state.purchasing} modalClosed={this.closeModalHandler}>
            <OrderSummary 
            ingredients={this.state.ingrediens}
            purchaseContinue={this.purchaseContinueHandler} 
            purchaseCancel={this.purchaseCancelHandler}
            price={this.state.totalPrice}
            />
          </Modal>
            <Burger ingrediens={this.state.ingrediens} />
            <BuildControls  
              ingredientAdded={this.addIngredientHandler} 
              removeIngredient={this.removeIngredientHandler}
              disabled={disabledInfo}
              purchase={this.state.purchase}
              price={this.state.totalPrice}
              ordered={this.purchasingHandler}
              />
        </Aux>
    )
  }
}
