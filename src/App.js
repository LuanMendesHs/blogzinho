// MEUS CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Meus Context
import { AuthProvider } from './context/AuthContext';

//Meus Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/userAuthentication';

// MEUS IMPORTS
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, auth)

  if( loadingUser ) {
    return <p>Carregando....</p>
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;