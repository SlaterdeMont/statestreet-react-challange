import React, { Component } from "react";
import Transaction from './transaction';
import { connect } from 'react-redux';

class TransactionsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: this.props.transactions,
      data: this.props.data
    };
  }

  componentDidUpdate(){
    if(this.state.transactions.length === 0) {
      this.setState({transactions: this.props.transactions});
    }
    else if(this.state.transactions !== this.props.transactions){
      this.setState({ transactions: [] }); 
    }
  }

  componentDidMount() {
    this.setState({
      transactions: this.props.transactions
    });
  }

  render() {
    return (
      <div className="transactionsHolder">
        <p>Results - {this.state.transactions.length}</p>
        <table className="tabletop">
        <thead>
        <TableTop />
        </thead>
        <tbody>
        <TableData transactions={this.state.transactions} />
        </tbody>
        </table>
      </div>
    );
  }
}

const TableData = ({transactions}) => {
  //let numDisplayed = 20; 
  return(
    transactions &&
    transactions.length > 0 &&
    transactions.map(
      (object, index) =>
      //index < numDisplayed && 
        <Transaction key={`transaction-${index}`} transaction={object} alt={index % 2 === 0 ? true : false }/>
    )
  )
}

const TableTop = () => {
  return(
  <tr>
    <th className="bold">ACCOUNT NO.</th>
    <th className="bold">ACCOUNT NAME</th> 
    <th className="bold">CURRENCY</th>
    <th className="bold">AMOUNT</th>
    <th className="bold">TRANSACTION TYPE</th>
  </tr>);
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    data: state.data
  }
}

export default connect(mapStateToProps)(TransactionsHolder);