
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import Login from './components/Login'

import {
  BrowserRouter as Router,

  Route,
  Routes,
  
} from "react-router-dom";




export default class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Navbar />





          <Routes>

            <Route path="/Main"
              element={<Main />}
            >

            </Route>





            {/* <Route path="/topics">
            <Topics />
          </Route> */}

            <Route path="/Form"
              element={<Form />}
            >

            </Route>

            <Route path="/Login"
              element={<Login/>}
            >

            </Route>
          </Routes>



          <Footer />

        </div>
      </Router>
    )
  }
}

