import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Users from './Pages/Users'
import Profile from './Pages/Profile'
import Error from './Pages/Error'
import NavBar from './Components/NavBar'



function App() {
  return (
    <div className="App">
      <h1>WS API</h1>
      <NavBar/>
     <Routes>
        <Route path='/' eLement={<Home/>}></Route>
        <Route path='/users' eLement={<Users/>}></Route>
        <Route path='/user/:id' eLement={<Profile/>}></Route>
        <Route path='/*' eLement={<Error/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
