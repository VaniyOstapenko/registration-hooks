import './App.css';
import { Routes, Route } from 'react-router-dom'
import RegistrationPage from './page/RegistrationPage/RegistrationPage';
import LoginPage from './page/LoginPage/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/reg' element={<RegistrationPage></RegistrationPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
