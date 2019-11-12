import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './reducer/store'
import {Provider} from 'react-redux'
import LoginForm from './PageContainers/LoginForm/LoginForm';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <LoginForm></LoginForm>
      </header>
      
    </div>
    </Provider>
  );
}

export default App;
