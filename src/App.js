import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main headingMargin={'8rem'}></Main>
    </div>
  );
}

export default App;
