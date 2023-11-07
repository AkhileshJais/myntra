import React from 'react';
import './Header.css';
import Myntralogo from '../../images/myntra_logo.png'

const Header = () => {
    
  return (
    <div className='main'>

     <div className='logo_container'>
     <a href='#'><img className='myntra_home' src={Myntralogo} alt='Myntra Home'></img></a>
     </div>

     <nav className='nav_bar'>
    <a href='#'>MEN</a>
    <a href='#'>WOMEN</a>
    <a href='#'>KIDS</a>
    <a href='#'>HOME & LIVING</a>
    <a href='#'>BEAUTY</a>
    <a href='#'>STUDIO <sup>New</sup></a>
     </nav>


     <div className='search_bar'>
     <span className="material-symbols-outlined search_icon"> search </span>
<input className ='search_input' placeholder='Search for products, brands and more' />
</div>

     <div className='action_bar'>

       <div className="action_container">
        <span class="material-symbols-outlined  action_icon">person</span>
        <span className='action_name'> Profile </span>
       </div>

       <div className="action_container">
       <span class="material-symbols-outlined action_icon"> favorite </span>
        <span className='action_name'> Wish List </span>
       </div>

       <div className="action_container">
       <span class="material-symbols-outlined action_icon"> shopping_bag </span>
        <span className='action_name'> Profile </span>
       </div>

     </div>
    </div>
  );
}

export default Header;
