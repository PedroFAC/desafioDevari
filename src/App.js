import React, {useState,useEffect} from 'react';
import './App.css';
import Navigator from './navigation/Navigator'
import api from './services/api'
function App() {
  useEffect(async ()=>{
    const response = await api.get('/api/v1/recipe/')
    console.log(response.ok)
  })
  return (
    <div className="App">
      <Navigator/>
    </div>
  );
}

export default App;
