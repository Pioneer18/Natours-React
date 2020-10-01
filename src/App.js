import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main headingMargin={'8rem'}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
