import logo from './logo.svg';
import './App.css';
import {useEffect, useReducer, useState} from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import {useInput} from './hooks/useInput'

function App() {
  const [isVisible, setVisible] = useReducer(isVisible => !isVisible, true)
  const users = useLocalStorage('https://fakestoreapi.com/products', 'products')
  const password = useInput('Hello')
  console.log(password)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setVisible}>Toogle react</button>
        {
          isVisible && <img src={logo} className="App-logo" alt="logo" />
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input {...password}></input>
        <div>{password.value}</div>
      </header>
        <div>
          {users.map(el => (
          <div key={el.id}>{el.title}</div>
        ))}
        </div>
    </div>
  );
}

export default App;
