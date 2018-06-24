import React, { Component } from 'react';
import Axios from '../../axios-orders';
import BuildControls from '../../burger/BuildControls/BuildControls';
import Burger from '../../burger/Burger';
import OrderSummary from '../../burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/aux_x';
import withErrorHandler from '../../hoc/errorHandler/errorHandler';

const INGREDIENS_PRICE = {
  salad: 0.4,
  bacon: 1,
  cheese: 0.3,
  meat: 1.5
}
class BurgerBuilder extends Component {
  state = {
    ingrediens: null, 
    totalPrice: 0,
    purchase: false,
    purchasing: false,
    loading: false,
    error: false
  }
  
  componentDidMount(){
    Axios.get('ingrediens.json')
      .then( response => {
        this.setState({ingrediens: response.data})
        console.log(response) // Fetch and set data to ingredient Object...
      })
      .catch( error => this.setState({error: true}))

      console.log(this.state.error)
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
    this.setState({loading: true});

    const order = {
      ingrediens: this.state.ingrediens,
      price: this.state.totalPrice,
        customer: {
          name: "Jan Kowalski",
            address: {
              street: "TestStreet 10",
              zipCode: '34-432',
              country: "Poland"
            },
            email: "test@email.com"
        },
        deliveryMethod: 'faster'
    }
    Axios.post('/orders', order)
      .then( response => {
        this.setState({loading: false, purchasing: false});
        console.log(response)
        })
      .catch(error => console.log(error))

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

    //If ingrediens has false value we display Spinner. When we fetch data from FireBase we have display component.
    let orderSummary = <Spinner />;
    let burger = this.state.error ? <p style={{ textAlign: 'center'}}>Wystąpił błąd</p> : <Spinner />;

  
    if(this.state.ingrediens){
        burger = (
        <Aux>
          <Burger ingrediens={this.state.ingrediens} />
          <BuildControls  
            ingredientAdded={this.addIngredientHandler} 
            removeIngredient={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchase={this.state.purchase}
            price={this.state.totalPrice}
            ordered={this.purchasingHandler}
        
        /></Aux>);

        orderSummary = <OrderSummary 
        ingredients={this.state.ingrediens}
        purchaseContinue={this.purchaseContinueHandler} 
        purchaseCancel={this.purchaseCancelHandler}
        price={this.state.totalPrice}
      />

    };

    // console.log(disabledInfo)
    return (
        <Aux>
          <Modal show={this.state.purchasing} modalClosed={this.closeModalHandler}>
            {orderSummary}
          </Modal>
            {burger}
        </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, Axios);
