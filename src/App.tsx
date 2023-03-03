import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import loginSelector from './redux/login.selector';
import Button from './components/Button';
import { AppDispatch } from './redux/store';
import loginRedux from './redux/login.redux';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(loginSelector.isLoggedIn);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/login")
    }

  }, [isLoggedIn])

  return (
    <>
      <Header />
      <div className={'content container'}>

        {isLoggedIn && (
          <div style={{ textAlign: 'right' }}>
            <Button type={'plain'} onClick={() => {
              dispatch(loginRedux.logout());
            }}>
              Abmelden
            </Button>
          </div>
        )}

        <Routes>
          <Route path={'/'} element={<HomeScreen />} />
          <Route path={'/login'} element={<LoginScreen />} />

        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
