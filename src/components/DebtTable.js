import React, { Component } from 'react';


class DebtTable extends Component {


  render(){
    return (
      <div>
        <table>
        <thead>
        <tr>
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
