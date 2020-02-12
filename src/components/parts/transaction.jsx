import React, { Component } from "react";
import { setTransaction } from '../../actions/postActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Transaction extends Component {
    constructor(props) {
      super(props);
      this.state = {
        transaction: this.props.transaction,
        alt: false
      };
    }

    render(){
      const transaction = this.state.transaction;

      const onClicked = (e) => {
        this.props.setTransaction(transaction);
      }

      console.log(this.props.alt);
      
      return (
          <tr className={`transaction${this.props.alt ? ' alt' : ''}`}>
            <td><Link to="./TransactionDetailPage" onClick={(e) => onClicked(e)}>{transaction.account}</Link></td>
            <td>{transaction.accountName}</td> 
            <td>{transaction.currencyCode}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.transactionType}</td>
          </tr>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTransaction: (transaction) => { dispatch(setTransaction(transaction)) }
  }
}

export default connect(null, mapDispatchToProps)(Transaction);