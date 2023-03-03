import React from 'react';
import './header.scss'
const Header = () => {
  return <>
    <header className={'header'}>
      <div className={'container'}>
        <img className={'logo'} src={require('../assets/header.png')} />
      </div>


    </header>
  </>;
};

export default Header