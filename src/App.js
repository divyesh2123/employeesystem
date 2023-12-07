import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './components/ApplicationNav';
function App() {
  return (
    <Container>

      <ApplicationNav/>

      <Routes>

      <Route path='/' element={<Registration></Registration>}/>


      </Routes>

    </Container>
  );
}

export default App;
