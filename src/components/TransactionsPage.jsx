import React, {Component} from "react";
import Filters from './parts/filters';
import { connect } from 'react-redux';
import TransactionsHolder from './parts/transactionsHolder';

class TransactionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {  
    return (
      <div className="App-outer">
        <h1 id="title" className="title bold">My Transactions</h1>
        <div className="filtersHolder">
        <Filters data={this.state.data && this.state.data} />
        </div>
        <TransactionsHolder />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(TransactionsPage);