import Landing from '@pages/Landing';
import GeneralLogin from '@pages/Login/GeneralLogin';
import Login from '@pages/Login/Login';
import GeneralSignup from '@pages/Signup/GeneralSignup';
import Signup from '@pages/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/general/login' element={<GeneralLogin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/general/signup' element={<GeneralSignup />} />

        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
