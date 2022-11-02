import './App.css';
import React from 'react';
// import Header from './components/Header';
import Balance from './components/Balance';
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import Apchart from "./components/Apchart";



const App = () => {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className="App">
          <Balance/>
          <AddTransaction/>
          <ExpenseList/>
          


          </div>
          <div className='NB'>
            <Apchart/>
          </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
