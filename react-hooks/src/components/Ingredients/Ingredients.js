import React,{useReducer,useState, useEffect,useCallback, useMemo} from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import ErrorModal from '../UI/ErrorModal'
import Search from './Search';
import useHttp from '../hooks/http'

const ingredientReducer = (currentIngredients, action)=>{
  switch(action.type){
    case 'SET': 
            return action.ingredients;
    case 'ADD':
            return [...currentIngredients, action.ingredient]
    case 'DELETE':
            return currentIngredients.filter(ing=> ing.id !==action.id);
    default :
      throw new Error('Should not get there');  
  }
}

const Ingredients=() =>{
  const [userIngredients, dispatch]= useReducer(ingredientReducer, []);
  const {isLoading, data,error, sendRequest, reqExtra,reqIdentifier, clear} = useHttp()
 // const [userIngredients, setUserIngredients]= useState([]);
 // const [isLoading, setIsLoading]= useState(false);
 // const [error, setError]= useState();
 

  useEffect(()=>{
    // console.log('Rendering Ingredients',userIngredients)
    if(!isLoading && !error && reqIdentifier==='REMOVE_INGREDIENT'){
      dispatch({type: 'DELETE', id: reqExtra})
    }else if(!isLoading && !error && reqIdentifier=== 'ADD_INGREDIENT'){
      dispatch({
          type:'ADD', 
          ingredient: {id : data.name , ...reqExtra}}) 
    }
  
  },[data, reqExtra,reqIdentifier,isLoading, error])
  
  //by default gets executed right after every component render cycle
  // if we dont pass second argument , then it gets executed after every update ,like (ComponentDidUpdate)
  //if we do pass an empty array as second argument, then it gets executed 
  //after first render cycle(only once) like(ComponentDidMount)

  const addIngredientHandler= useCallback(ingredient =>{

    sendRequest('https://react-hooks-557a4.firebaseio.com/ingredients.json','POST',
                 JSON.stringify(ingredient),ingredient,
                 'ADD_INGREDIENT');
    //setIsLoading(true)
  //   dispatchHttp({type: 'SEND'});  
  //   fetch('https://react-hooks-557a4.firebaseio.com/ingredients.json',{
  //     method:'POST',
  //     body: JSON.stringify(ingredient),
  //     headers: {'Content-Type':'application/json'}
  //   }).then(response=>{
  //       //setIsLoading(false)
  //       dispatchHttp({type: 'RESPONSE'})
  //       return response.json()  //extract the body and convert it into normal 
  //                               //javascript object and returns a promise
  //   }).then( responseData=>{
  //     // setUserIngredients(prevIngredient => [...prevIngredient,
  //     //   {id : responseData.name , ...ingredients}])
  //     //   })

  //     dispatch({type:'ADD', ingredient: {id : responseData.name , ...ingredient}})
    
   
  // })        
},[sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId =>{
   sendRequest(`https://react-hooks-557a4.firebaseio.com/ingredients/${ingredientId}.json`,
              'DELETE',null, ingredientId ,'REMOVE_INGREDIENT')
   
  },[sendRequest])

  const filteredIngredienthandler=useCallback(filteredIngredients=>{
    //setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients})
  },[])

  // const clearError=useCallback(()=>{
  //   // setError(null);
  //   // setIsLoading(false)
  //   //dispatchHttp({type:'CLEAR'})
  //   clear()
  // },[])

  const ingredientList= useMemo(()=>{
    return  <IngredientList 
                    ingredients={userIngredients} 
                    onRemoveItem={removeIngredientHandler} />
  },[userIngredients,removeIngredientHandler])

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredienthandler} />
        {ingredientList}
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
