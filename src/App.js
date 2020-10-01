import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main headingMargin={'8rem'} />
      <Footer />
    </div>
  );
}

export default App;
