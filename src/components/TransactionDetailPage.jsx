import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TransactionDetailPage extends Component {
  render() {
    const transaction = this.props.activeTransaction;

    return (
      <div className="TransactionDetailPage">
        <Link to="./">{`< Back`}</Link>
        <h1 className="title bold">Transaction {transaction && transaction.account}</h1>
        <p><span  className="bold">Account No.:</span> {transaction && transaction.account}</p>
        <p><span  className="bold">Account Name:</span> {transaction && transaction.accountName}</p> 
        <p><span  className="bold">Currency Code:</span> {transaction && transaction.currencyCode}</p>
        <p><span  className="bold">Amount:</span> {transaction && `${transaction.currencySymbol} ${transaction.amount}`}</p>
        <p><span  className="bold">Transaction Type:</span> {transaction && transaction.transactionType}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeTransaction: state.activeTransaction
  }
}

export default connect(mapStateToProps)(TransactionDetailPage);