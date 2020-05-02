import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:true
        }
    }

    render() {
    //   return    this.state.isLoggedIn ? 
    //             (<div>Welcome pinki</div> ):
    //             (<h1>Welcome guest</h1>  )      

    return this.state.isLoggedIn && <h1>Welcome pinki</h1>
    }
}

export default UserGreeting
