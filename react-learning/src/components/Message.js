import React,{Component} from 'react';

class Message extends Component{
   
    state={
        message:{
            name:'pinki',
            age:23
        }    
    }

    changeMessage=()=>{
        this.setState({
            message:{
                name:'preeti',
                age:29
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message.name} and {this.state.message.age}</h1>
                <button onClick={this.changeMessage}>Submit</button>
            </div>
      
        )
    }
}

export default Message;