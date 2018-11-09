import React, { Component } from 'react';
import './App.css';

import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';

// https://www.techradar.com/news/best-phone/17
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
