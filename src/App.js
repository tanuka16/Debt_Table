import React, { Component } from 'react';
import './App.css';
import DebtTable from './components/DebtTable';
import DebtForm from './components/DebtForm'

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

    //dynamicly grabs data from an array of objects
  componentDidMount(){
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
      .then(res => res.json())
      .then((debtData) => {
        this.setState({ debt: debtData})
        // console.log(this.state)
      })
    }

  handleNewDebtSubmit = (newDebtData) => {
  const newDebt = {
        creditorName: newDebtData.creditorName,
        firstName: newDebtData.firstName,
        lastName: newDebtData.lastName,
        minPaymentPercentage: newDebtData.minPaymentPercentage,
        balance: newDebtData.balance
      };
      console.log(newDebt);
      // const proxyurl = { "/*": { "target": "http://localhost:3000" } }
      // const proxyurl = "http://localhost:3000/"
      // const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      // fetch( (proxyurl + url), {
      //   method: 'POST',
      //     headers: {
      //       // 'Authorization': 'Basic'+ auth,
      //       // 'Origin': "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json",
      //       // 'Access-Control-Request-Method': "POST, GET, OPTIONS, DELETE, PUT",
      //       // 'Access-Control-Request-Headers': 'http://localhost:3000/',
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify(newDebt)
      // })
      // .then(res => res.json())
      // .then(debtNew => {                                                  //console.log(debtNew)
      //   this.setState({debt: [...this.state.debt, debtNew]})
      // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
      // })
    this.setState({debt: [...this.state.debt, newDebt]})
  }
  render(){
    return (
      <div>
        <h1>Debt Table</h1>
        <DebtTable debt={this.state.debt}/>
        <DebtForm onNewDebtSubmit={this.handleNewDebtSubmit}/>
      </div>
    );
  }
}

export default App;
