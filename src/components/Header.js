import {LOGO_URL} from '../Utils/constant'
import { useState  } from 'react';
export const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const clickHandler = ()=>{
    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className='login-btn' onClick={()=>clickHandler()} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};