import React, { Component } from 'react';


class DebtTable extends Component {
  state={
    checked: false,
    count: 0
  }

  onSelectAll = () => {
    const parent = document.getElementById("parent");
    let input = document.getElementsByTagName('input');
    // console.log(this.state);

    if(parent.checked ===  true){
      for (var i = 0; i < input.length; i++) {
        if(input[i].type ==="checkbox" && input[i].id === "child_check" && input[i].checked === false){
          input[i].checked = true;
          // console.log(input[i]);
        }
      }
    }
    else if(parent.checked ===  false){
      for (var i = 0; i < input.length; i++) {
        if(input[i].type ==="checkbox" && input[i].id === "child_check" && input[i].checked===true){
          input[i].checked = false;
          // console.log(input[i]);
        }
      }
    }
  }


  //Select each checkbox === done
  onSelectChange =(e)=>{
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.checked })
    console.log(e.target.checked);
  }

  handleCheckCount=(e)=> {

    const { checked, type } = e.target;
    let count= this.state.count
      if (type === "checkbox" && checked === true) {
        this.setState(state => state.count+=1, this.logCount)
      } else {
        this.setState(state => state.count-=1, this.logCount)
      }
    // }
  }

  logCount() {
    console.log(this.state.count);
  }
//Not working
  handleRemove=(e)=>{
    let input = document.getElementsByTagName('input');
    if(input.checked ===  true){
      this.props.handleRemove()
    }
    // console.log(this.props.handleRemove);
    // const { checked, type } = e.target;
    // if(type === "checkbox" && checked === true){
    //   this.props.handleRemove()
    // }
    // const checked = this.state.checked.filter(i => i.id !== debt.id)
    // this.setState({checked})
    // console.log(checked);
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
            onChange={e => this.handleCheckCount(e)}
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
                          onChange={this.onSelectChange}
                          onChange={e => this.handleCheckCount(e)}
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
          <h5>
            Check Row Count: {this.state.count}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Total Row Count: {this.props.debt.length}</span>
          </h5>

            <div className='dbutton' onClick={this.props.handleRemove} onChange={()=>this.handleRemove()}>
            <button>REMOVE</button>
            </div>
            <br  />
        </div>
      </div>
    );
  }
}

export default DebtTable;
