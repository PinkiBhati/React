import {BurgerBuilder} from './BurgerBuilder'
import React from 'react'
import {configure, shallow} from 'enzyme';  //named export
import Adapter from 'enzyme-adapter-react-16' //default
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl';

//shallow is the best way of rendering of react components with all its content 
//but the content isn't deeply rendered

//configure enzyme and connected to the react version 
configure({adapter: new Adapter()}) // enzyme is connected

describe('<BurgerBuilder />',()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper= shallow(<BurgerBuilder onInitIngredients={()=>{}} />)
    });

    it('should render <BuildControls /> element if ingredients are received',()=>{
        wrapper.setProps({ings :{salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})