import React, { Component } from 'react'
import './App.css'
import Data from './Data'
import styles from './data.module.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],

    }
  }

  submitHandler = () => {
    let text = this.refs.textBox.value;

    let count = 0;
    for (let element of text) {
      if (element === "-") {
        count += 1;
      }
    }
    if (text === '' || count > 1) {
      alert('enter valid string')
    }

    else{

      console.log(text);
    let fullData = text.split("-");
    let fruitname = fullData[0];
    let quantity = fullData[1];

    if (isNaN(quantity)) {
      alert('enter a number after -');
    }

    else {

      const fruits = {
        fruitname: fruitname,
        quantity: quantity
      }
      const data = [...this.state.data];
      data.push(fruits);
      this.setState({ data: data });
      document.getElementById('id1').value='';
      
    }
    }
    
  }

  enterHandler = (target) => {
    if (target.charCode == 13) {
      this.submitHandler()
    }
  }

  deleteHandler = (index) => {

    const data = [...this.state.data];
    data.splice(index, 1);
    this.setState({ data: data });
  }




  render() {
    return (
      <div className="App">
        <input className={styles.input} ref="textBox" id ="id1" type="text" onKeyPress={this.enterHandler} /><br/>
        <button className={styles.submit} onClick={this.submitHandler}>Submit</button><br></br><br></br>

        {this.state.data.map((fruit,index) => {
          return <Data 
            name={fruit.fruitname}
            quantity={fruit.quantity}
            delete={this.deleteHandler}
            key={index}
          ></Data>
        })}
      </div>
    )
  }
}

export default App



