import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        <div className="container" style={{ height: 500 }}>
          <Routes>
            <Route path='/' element={<ListPlayerComponent />} />
            <Route path='/players' element={<ListPlayerComponent />}></Route>
            <Route path='/items' element={<ListItemsComponent />}></Route>
            <Route path='/add-player/:id' element={<CreatePlayerComponent />}></Route>
            <Route path='/view-player/:id' element={<ViewPlayerComponent />}></Route>
            <Route path='/update-player/:id' element={<UpdatePlayerComponent />}></Route>
            <Route path='/add-items/:id' element={<CreateItemsComponent />}></Route>
            <Route path='/view-items/:id' element={<ViewItemsComponent />}></Route>
            <Route path='/update-items/:id' element={<UpdateItemsComponent />}></Route>
            <Route path='/powers' element={<ListPowerComponent />}></Route>
            <Route path='/add-power/:id' element={<CreatePowerComponent />}></Route>
            <Route path='/view-power/:id' element={<ViewPowerComponent />}></Route>
            <Route path='/update-items/:id' element={<UpdatePowerComponent />}></Route>

          </Routes>
          <div className="container" style={{ height: 800 }}>
            <Routes>
              <Route path='/flow' element={<OverviewFlowComponent />}></Route>
            </Routes>
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
