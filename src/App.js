import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './components/ApplicationNav';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <Container>

      <ApplicationNav/>

      <Routes>

      <Route path='/' element={<Registration></Registration>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/home' element={<Home></Home>}/>

      </Routes>

    </Container>
  );
}

export default App;
