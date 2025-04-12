import React from 'react';
import Home from './components/home';
import History from './components/history';

const App = () => {
  return (
    <div>
      <Home />
      <History />
      <button onClick={Home}></button>
      <button onClick={History}></button>


    </div>
  );
}

export default App;
