import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Router, Route, Switch } from "react-router-dom";
import history from '../history'
import Home from './Home'
import Admins from './Admins'
import Comments from './Comments'
import Customers from './Customers'
import Orders from './Orders'
import Products from './Products'
import Vendors from './Vendors'
import NotFound from './NotFound'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admins" component={Admins} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/vendors" component={Vendors} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
