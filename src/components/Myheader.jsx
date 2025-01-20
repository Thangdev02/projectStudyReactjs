import React from 'react';
import '../styles/MyHeader.css'
const Myheader = () => { //1 COMPONENTS, set Interval

    //javascript
    
    return (
        <header className='header'>
            <div className='logo'>
                <img alt='Logo Starbuck' src="https://www.saokim.com.vn/blog/wp-content/uploads/2022/04/logo-moi-cua-starbucks.jpg.webp" />
            </div>
            <nav className='nav'>
                <ul className='ul'>
                    <a href='/'> <li>Home</li></a>
                    <a href='/contact'> <li>Contact</li></a>
                    <a href='/store'> <li>Store</li></a>
                    <a href='/profile'> <li>Profile</li></a>
                    <a href='/aboutUs'> <li>AboutUS</li></a>
                </ul>
            </nav>
            <div className='btn'>
                <button className='button'>Login</button>
            </div>
        </header>
    );
};

export default Myheader; 