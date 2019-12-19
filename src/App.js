import React from 'react';
import 'assets/styles/reset.css'

import './App.css';
import Layout from './pages/Layout'
import ShoeSale from './pages/shoeSale/shoeSale'
import Detail from './pages/details/detail'
import {BrowserRouter as Router} from 'react-router-dom'
import {
  Route,
  Switch
}from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route 
          path="/shoesale"
          component={ShoeSale}
        />
        <Route 
          path="/detail/:id/:type"
          component={Detail}
        />
        <Route 
          path=""
          component={Layout}
        />
      </Switch>
       {/* <ShoeSale />
       <Layout /> */}
    </Router>
    </>
  );
}

export default App;
