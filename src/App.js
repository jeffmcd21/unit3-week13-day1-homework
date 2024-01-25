import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className=".app-container">
      <Header />
      <Main />
      </div>
      <Footer />
   </div>
  );
}

export default App;
