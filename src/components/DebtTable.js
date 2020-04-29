import React, { Component } from 'react';


class DebtTable extends Component {
  state={
    checked: false,
    count: 0,
    total: 0
  }

  onSelectAll = () => {
    const parent = document.getElementById("parent");
    let input = document.getElementsByTagName('input');
    let count = this.state.count


    if(parent.checked ===  true){
      for (var i = 0; i < input.length; i++) {
        if(input[i].type ==="checkbox" && input[i].id === "child_check" && input[i].checked === false){
          if(input[i].checked = true){
            count++;
          }
          // console.log(input[i]);
        }
      }
    }
    else if(parent.checked ===  false){
      for (var j = 0; j < input.length; j++) {
        if(input[j].type ==="checkbox" && input[j].id === "child_check" && input[j].checked===true){
          if(input[j].checked = false){
            count--;
          }
          // console.log(input[i]);
        }
      }
    }
    this.setState(prevState=>({...prevState, count}))
  }



  //Select each checkbox and count the checked boxes
  onSelectChange =(e)=>{
  // e.preventDefault()
  let count = this.state.count
  const { type, checked, name} = e.target;
  this.setState({ [name]: checked })
  // counts the selected chckboxes
  if(type === "checkbox" && checked === true){
    count++;
  }else {
    count--;
  }
  this.setState(prevState=>({...prevState, count}))
  // console.log(e.target.checked);
}

  calculateTotal=(e)=> {
    const {checked} = e.target;
    let total= this.state.total;
    // let checked = this.state.checked
    this.props.debts.forEach((debt)=> {
      if(checked){
        (total += debt.balance)
      }else{
        (total -= debt.balance)
      }
    })

    this.setState(prevState=>({...prevState, total}))
    console.log(total);
    // document.getElementById("val").innerHTML = "Sum Value =" + total;
  }


  render(){
    return (
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
            <input type="checkbox" type="checkbox" name="check" id="parent"
            onClick={this.onSelectAll.bind(this)}
            // onChange={e => this.handleCheckCount(e)}
            onChange={this.calculateTotal}
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
            this.props.debts.map(debt => {
              return(
                  <tr key={debt.id}>
                      <td className="select">
                        <input type="checkbox" name="check1" id="child_check"
                          onChange={this.onSelectChange}
                          // onChange={this.calculateTotal}
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

        <div>
        <h4>Total: {this.state.total}</h4>

            Check Row Count: {this.state.count}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Total Row Count: {this.props.debts.length}</span>


            <div className='dbutton' onClick={this.props.handleRemove} >
            <button>REMOVE</button>
            </div>
            <br  />
        </div>
      </div>
    );
  }
}

export default DebtTable;
