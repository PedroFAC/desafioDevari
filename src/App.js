import React, {useState,useEffect} from 'react';
import './App.css';
import Navigator from './navigation/Navigator'
import api from './services/api'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  useEffect(async ()=>{
    const response = await api.get('/api/v1/recipe/')
    console.log(response.ok)
  })
  return (
    <div className="App">
      <Provider store={store}>
      <Navigator/>
      </Provider>
    </div>
  );
}

export default App;
