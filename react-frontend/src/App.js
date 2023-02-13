import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListPlayerComponent from './components/player/ListPlayerComponent';
import CreatePlayerComponent from './components/player/CreatePlayerComponent';
import UpdatePlayerComponent from './components/player/UpdatePlayerComponent';
import ViewPlayerComponent from './components/player/ViewPlayerComponent';

import ListItemsComponent from './components/items/ListItemsComponent';
import CreateItemsComponent from './components/items/CreateItemsComponent';
import UpdateItemsComponent from './components/items/UpdateItemsComponent';
import ViewItemsComponent from './components/items/ViewItemsComponent';

import ListPowerComponent from './components/power/ListPowerComponent';
import CreatePowerComponent from './components/power/CreatePowerComponent';
import UpdatePowerComponent from './components/power/UpdatePowerComponent';
import ViewPowerComponent from './components/power/ViewPowerComponent';

import OverviewFlowComponent from './components/flow/OverviewFlow';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPlayerComponent}></Route>
            <Route path="/players" component={ListPlayerComponent}></Route>
            <Route path="/items" component={ListItemsComponent}></Route>

            <Route path="/add-player/:id" component={CreatePlayerComponent}></Route>
            <Route path="/view-player/:id" component={ViewPlayerComponent}></Route>
            <Route path="/update-player/:id" component={UpdatePlayerComponent}></Route>

            <Route path="/add-items/:id" component={CreateItemsComponent}></Route>
            <Route path="/view-items/:id" component={ViewItemsComponent}></Route>
            <Route path="/update-items/:id" component={UpdateItemsComponent}></Route>

            <Route path="/powers" component={ListPowerComponent}></Route>
            <Route path="/add-power/:id" component={CreatePowerComponent}></Route>
            <Route path="/view-power/:id" component={ViewPowerComponent}></Route>
            <Route path="/update-items/:id" component={UpdatePowerComponent}></Route>

            <Route path='/flow' component={OverviewFlowComponent}></Route>

          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div >

  );
}

export default App;
