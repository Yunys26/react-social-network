import React, { Component } from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,} from 'react-router-dom';


class App extends Component {
  render (
  ) {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <MainSection />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
