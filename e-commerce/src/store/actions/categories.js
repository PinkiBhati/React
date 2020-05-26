import * as actionTypes from '../actions/actionTypes'
import axios from '../../axios-fetch'

export const setCategories=(category)=>{
    return{
        type: actionTypes.SET_CATEGORIES,
        category: category
    }
}

export const fetchcategoryFailed=()=>{
    return{
        type: actionTypes.FETCH_CATEGORIES_FAILED
    }
}
export const initCategories=()=>{
    return dispatch=>{
        axios.get('/getProducts').then(response=>{
            dispatch(setCategories(response.data))
        }).
        catch(error=>{
            dispatch(fetchcategoryFailed())
        })
    }
}