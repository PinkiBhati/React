import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }

        this.clickhandler=this.clickhandler.bind(this)
    }

    clickhandler(){
        this.setState({
            message:'Bye'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
