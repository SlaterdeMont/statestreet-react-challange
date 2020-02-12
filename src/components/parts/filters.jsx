import React, { Component } from "react";
import { filterTransactions } from '../../actions/postActions';
import { connect } from 'react-redux';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render(){
    let activeAccountFilters = [];
    let activeTransactionFilters = [];
    const accountFilters = [];
    const transactionFilters = [];

    this.props.data.map((transaction) => accountFilters.indexOf(transaction.accountName) === -1 && accountFilters.push(transaction.accountName));
    this.props.data.map((transaction) => transactionFilters.indexOf(transaction.transactionType) === -1 && transactionFilters.push(transaction.transactionType));

    const SortBy = (type, filtertype) => {
      AddRemoveFilter(type, filtertype);
      const transactions = this.props.data;
      if(transactions && transactions.length > 0){
        let sortedTransactions = [];
        if(activeAccountFilters.length > 0 || activeTransactionFilters.length > 0) {
          sortedTransactions = transactions.filter(function (transaction) {
            if(activeAccountFilters.indexOf(transaction.accountName) !== -1) {
              if(activeTransactionFilters.length > 0){
                if(activeTransactionFilters.indexOf(transaction.transactionType) !== -1) {
                  return transaction;
                }
              }
              else {
                return transaction;
              }
            }
            else if(activeAccountFilters.length === 0 && activeTransactionFilters.indexOf(transaction.transactionType) !== -1) {
              return transaction;
            }
          });
          this.props.filterTransactions(sortedTransactions);
        }
        else{
          this.props.filterTransactions(transactions);
        }
      }
    }

    //Add an account or transaction filter or remove it if already selected
    const AddRemoveFilter = (filter, type) => {
      if(type === "account"){
        if(activeAccountFilters.indexOf(filter) !== -1 ) {
          activeAccountFilters.splice( activeAccountFilters.indexOf(filter), 1 );
        }
        else {
          activeAccountFilters.push(filter);
        }
      }
      else if(type === "transactions"){
        if(activeTransactionFilters.indexOf(filter) !== -1 ) {
          activeTransactionFilters.splice( activeTransactionFilters.indexOf(filter), 1 );
        }
        else {
          activeTransactionFilters.push(filter);
        }
      }
    }

    //Resests the filters and unchecks the boxes
    const ResetFilters = () => {
      document.getElementsByClassName("activeaccountfilters").checked = false;
      document.getElementsByClassName("activetransactionfilters").checked = false;
      activeAccountFilters = [];
      activeTransactionFilters = [];
      this.props.filterTransactions(this.props.data);
    }

    return (
      <form>
        <p className="bold">Filters</p>
        <div className="filterGroup">
        <p className="filterType bold">Account Name</p>
          {accountFilters &&
          accountFilters.length > 0 &&
          accountFilters.map(
            (filter, index) =>
            <div key={`filter-${index}`}>
            <input type="checkbox" className="activeaccountfilters" label={filter} id={filter} onChange={() => SortBy(filter, "account")}/>
            <label>{filter}</label>
            </div>
          )}
        </div>

        <div className="filterGroup">
          <p className="filterType bold">Transaction Type</p>
          {transactionFilters &&
          transactionFilters.length > 0 &&
          transactionFilters.map(
            (filter, index) =>
            <div key={`filter-${index}`}>
            <input type="checkbox" className="activetransactionfilters" label={filter} id={filter} onChange={() => SortBy(filter, "transactions")}/>
            <label>{filter}</label>
            </div>
          )}
        </div>

        <button onClick={() => ResetFilters()} className="resetButton">Reset Filters</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterTransactions: (sortedTransactions) => { dispatch(filterTransactions(sortedTransactions)) }
  }
}

export default connect(null, mapDispatchToProps)(Filters);