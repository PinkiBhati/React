import React, { useState, useEffect, useCallback } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { useDispatch, useSelector, Provider, connect } from 'react-redux';
import axios from '../../axios-order';
import * as actions from '../../store/actions/index'

export const BurgerBuilder = props => {

    const [purchasing, setPurchasing] = useState(false);

    // const dispatch = useDispatch();

    // const ings = useSelector(state => state.burgerBuilder.ingredients)

    // const price = useSelector(state => state.burgerBuilder.totalPrice)

    // const error= useSelector(state => state.burgerBuilder.error);

    // const isAuthenticated= useSelector(state => state.auth.token !==null)

    // const onIngredientAdded= ingName => dispatch(actions.addIngredient(ingName));
    // const onIngredientRemoved = ingName => dispatch(actions.removeIngredient(ingName));
    // const onInitIngredients =  useCallback(()=> dispatch(actions.initIngredients()),[dispatch]);
    // const onInitPurchase = () => dispatch(actions.purchaseInit());
    // const onSetAuthRedirectPath =  path => dispatch(actions.setAuthRedirectPath(path)) ; 


    //load our initial ingredients from db
    const { onInitIngredients } = props;

    useEffect(() => {
        props.onInitIngredients();
    }, [onInitIngredients]);

    const updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, ele) => {
                return sum + ele;
            }, 0)

        return sum > 0;
    }



    const purchasingHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true);
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth')
        }

    }

    const purchasingCancelHandler = () => {
        setPurchasing(false);
    }

    const purchasingContinueHandler = () => {
        //alert('You Continue');

        props.onInitPurchase()
        props.history.push('/checkout')
    }


    const disabledInfo = {
        ...props.ings
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }


    let orderSummary = null;
    let burger = props.error ? <p>Ingredients cant be loaded</p> : <Spinner />

    if (props.ings) {

        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(props.ings)}
                    ordered={purchasingHandler}
                    isAuth={props.isAuthenticated}
                    price={props.price} />
            </Aux>
        );

        orderSummary = <OrderSummary ingredients={props.ings}
            price={props.price}
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: ingName => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: useCallback(() => dispatch(actions.initIngredients()), [dispatch]),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
