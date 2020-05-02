import React, { Component } from 'react'


 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementHandler=()=>{
        this.setState( (prevState)=>({
            count: prevState.count +1,
            }),
            ()=>{console.log(this.state.count)}
            )
            console.log(this.state.count);
       
    };

    incrementFive=()=>{
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
        this.incrementHandler()
    }
    
    
    render() {
        return (
            <div>
                <div>count-{this.state.count}</div>
                <button onClick={this.incrementFive}>Increment</button>
            </div>
            
        )
    }
}

export default Counter
