import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import axios from '../../axios-order';
import * as actions from '../../store/actions/index'

export class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    //load our initial ingredients from db
    componentDidMount() {
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, ele) => {
                return sum + ele;
            }, 0)

        return sum > 0 ;
    }

  

    purchasingHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({ purchasing: true });
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth')
        }
        
    }

    purchasingCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchasingContinueHandler = () => {
        //alert('You Continue');
      
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }
    render() {

        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        let orderSummary= null;
        let burger = this.props.error? <p>Ingredients cant be loaded</p> : <Spinner/>

        if(this.props.ings){

            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchasingHandler}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price} />
                </Aux>
            );

            orderSummary = <OrderSummary ingredients={this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.purchasingCancelHandler}
            purchaseContinued={this.purchasingContinueHandler} />
        }



        
        return (
            <Aux>

                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}


            </Aux>
        )
    }
}
const mapStateToProps= state=>{
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !==null
    }
}
const mapDispatchToProps= dispatch=>{
    return{
        onIngredientAdded: (ingName)=> dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName)=> dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: ()=> dispatch(actions.initIngredients()),
        onInitPurchase : ()=> dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath : (path)=> dispatch(actions.setAuthRedirectPath(path))    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(BurgerBuilder, axios))
