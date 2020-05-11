const redux = require('redux');
const createStore= redux.createStore;

const initailState={
    counter :0
}

//Reducer
const rootReducer=(state = initailState, action)=>{
    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter: state.counter +1
        }
    }

    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}


//store
const store=createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
    console.log('[Subscription]',store.getState())
})

//Dispatching actions
store.dispatch({type:'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type:'ADD_COUNTER', value: 10});
console.log(store.getState());

