import React, { Component } from 'react';
import './App.css';
import DebtTable from './components/DebtTable';

class App extends Component {
  state = {
    debt: []
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
      .then(res => res.json())
      .then((debtData) => {
        this.setState({ debt: debtData})
        // console.log(this.state)
      })
    }
  render(){
    return (
      <div>
        <h1>Debt Table</h1>
        <DebtTable debt={this.state.debt}/>
      </div>
    );
  }
}

export default App;
