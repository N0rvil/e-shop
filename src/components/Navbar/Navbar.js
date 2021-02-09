import React from 'react';
import { Link } from 'react-router-dom';
import CartPop from './../CartPop/CartPop';
import './Navbar.scss';
import './../CartPop/CartPop.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__first--row'>
                <div className='navbar__first--row-box'>
                    <img className='navbar__icon' alt='telephone-icon' src='/img/telephone-icon-white.png' />
                    <p>514 254 889</p>
                </div>
                    <Link className='navbar__first--row-box' to='/login' >
                        <img className='navbar__icon' alt='telephone-icon' src='/img/login-icon-white.png' />
                        <h4 className='navbar__login'>Login</h4>
                    </Link >
            </div>
            <div className='navbar__second--row'>
                <div className='navbar__second--row-box'>
                    <h1 className='navbar__logo'>progress gym</h1>
                    <img className='navbar__logo navbar__logo-img' alt='logo' src='/img/logo-cut.png' />
                </div>
                <div className='navbar__second--row-box'>
                    <div className='navbar__search'>
                        <div className='navbar__search-box'>
                            <img className='navbar__search-icon' alt='search-icon' src='/img/search-icon-white.png' />
                        </div>
                        <input className='navbar__search-input' type='text' placeholder='Search for term' />
                    </div>
                </div>
                <div className='navbar__second--row-box'>
                    <Link className='navbar__cart' to='/cart' >
                    
                            <div className='navbar__cart-box'>
                                <img className='navbar__cart-icon' alt='cart' src='/img/cart-icon-white.png'/>
                            </div>
                            <h4>cart</h4>
                    </Link>
                    <CartPop />
                </div>
            </div>
            <div className='hr'></div>
            <div className='navbar__thirt--row'>
                <div className='navbar__thirt--row-box'>
                    <Link to='/'>
                        <img className='navbar__icon' alt='home-icon' src='/img/home-icon-white.png' />
                    </Link>
                    <Link className='navbar__link'>food supplements</Link>
                    <Link className='navbar__link'>clothes</Link>
                    <Link className='navbar__link'>healthy food</Link>
                    <Link className='navbar__link'>gear</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;