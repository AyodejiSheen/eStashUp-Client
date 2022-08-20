
import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';



import { Alert } from './components/alert';
import ScrollToTop from './components/scrollToTop';
import { Login } from './views/login';
import { Signup } from './views/signup';
import { Home } from './views/home';
import { Verification } from './views/verification';
import { Forgotpassword } from './views/forgotpassword';
import { SetPage } from './views/setpage';









function App() {

  return (
    <>

      <ScrollToTop />
      <Alert />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="verify-mail" element={<Verification/>}></Route>
        <Route path="forgot-password" element={<Forgotpassword/>}></Route>
        <Route path="activated" element={<SetPage/>}></Route>
      </Routes>

    </>
  );
}

export default App;
