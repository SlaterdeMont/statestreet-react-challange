import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TransactionsPage from './components/TransactionsPage';
import TransactionDetailPage from './components/TransactionDetailPage';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Route 
            exact path="/" 
            component={TransactionsPage}
          />
          <Route path="/TransactionDetailPage" component={TransactionDetailPage} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;