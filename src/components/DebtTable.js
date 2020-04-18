import React, { Component } from 'react';


class DebtTable extends Component {


  //Select each checkbox === done
  onSelectChange =(e)=>{
    // e.preventDefault()
    this.setState({ [e.target.name]: e.target.checked })
    console.log(e.target.checked);
  }


  render(){
    return (
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
            <input type="checkbox" 
            />
          </th>
          <th>CreditorName</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>MinPaymentPercentage</th>
          <th>Balance</th>
        </tr>
        </thead>
          <tbody>
          {
            this.props.debt.map(debt => {
              return(
                  <tr key={debt.id}>
                      <td className="select">
                        <input type="checkbox" name="check1" id="child_check"
                          onChange={this.onSelectChange.bind(this)}
                         />
                      </td>
                      <td>{debt.creditorName}</td>
                      <td>{debt.firstName}</td>
                      <td>{debt.lastName}</td>
                      <td>{debt.minPaymentPercentage}</td>
                      <td>{debt.balance}</td>
                    </tr>)
                })
              }
          </tbody>
        </table>


      </div>
    );
  }
}

export default DebtTable;
