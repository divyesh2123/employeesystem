import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './components/ApplicationNav';
import Login from './pages/Login';
import Home from './pages/Home';
import EmployeeGrid from './components/EmployeeGrid';
import MyGrid from './components/MyGrid';
import LanguageContext from './LanguageContext';
import { useState } from 'react';
function App() {

  const [lan,setlan]= useState('en')
  return (
   
<LanguageContext.Provider  value={{lan,setlan}}>
 

      <ApplicationNav/>

      <Routes>

      <Route path='/' element={<Registration></Registration>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/home' element={<Home></Home>}/>
      <Route path='/employee' element={<MyGrid></MyGrid>}/>

      </Routes>

      </LanguageContext.Provider>
  );
}

export default App;
