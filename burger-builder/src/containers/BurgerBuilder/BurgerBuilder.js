import React, { useState, useEffect ,useCallback} from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../../axios-order';
import * as actions from '../../store/actions/index'

export const BurgerBuilder = props => {

    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();
    const ings = useSelector(state => state.burgerBuilder.ingredients)

    const price = useSelector(state => state.burgerBuilder.totalPrice)

    const error= useSelector(state => state.burgerBuilder.error);

    const isAuthenticated= useSelector(state => state.auth.token !==null)

    const onIngredientAdded= ingName => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = ingName => dispatch(actions.removeIngredient(ingName));
    const onInitIngredients =  useCallback(()=> dispatch(actions.initIngredients()),[dispatch]);
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath =  path => dispatch(actions.setAuthRedirectPath(path)) ; 


    //load our initial ingredients from db
   
    useEffect(()=> {
        onInitIngredients();
    },[onInitIngredients]);

   const updatePurchaseState= (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, ele) => {
                return sum + ele;
            }, 0)

        return sum > 0 ;
    }

  

    const purchasingHandler = () => {
        if(isAuthenticated){
            setPurchasing(true);
        }else{
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth')
        }
        
    }

    const purchasingCancelHandler = () => {
        setPurchasing(false);
    }

    const purchasingContinueHandler = () => {
        //alert('You Continue');
      
        onInitPurchase()
        props.history.push('/checkout')
    }
    

        const disabledInfo = {
            ...ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        let orderSummary= null;
        let burger = error? <p>Ingredients cant be loaded</p> : <Spinner/>

        if(ings){

            burger = (
                <Aux>
                    <Burger ingredients={ings} />
                    <BuildControls
                        ingredientAdded={onIngredientAdded}
                        ingredientRemoved={onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={updatePurchaseState(ings)}
                        ordered={purchasingHandler}
                        isAuth={isAuthenticated}
                        price={price} />
                </Aux>
            );

            orderSummary = <OrderSummary ingredients={ings}
            price={price}
            purchaseCancelled={purchasingCancelHandler}
            purchaseContinued={purchasingContinueHandler} />
        }



        
        return (
            <Aux>

                <Modal show={purchasing} modalClosed={purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}


            </Aux>
        )
    
}


export default withErrorHandler(BurgerBuilder, axios);
