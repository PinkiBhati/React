import React from 'react'
import {configure, shallow} from 'enzyme';  //named export
import Adapter from 'enzyme-adapter-react-16' //default
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem';

//shallow is the best way of rendering of react components with all its content 
//but the content isn't deeply rendered

//configure enzyme and connected to the react version 
configure({adapter: new Adapter()}) // enzyme is connected

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })


    it('should render just two <NavigationItem/> elements if not authenticated',()=>{
        
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render just three <NavigationItem/> elements if  authenticated',()=>{
        wrapper.setProps({isAuthenticated : true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })

    it('contains logout nav element',()=>{
        wrapper.setProps({isAuthenticated : true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    })
})
