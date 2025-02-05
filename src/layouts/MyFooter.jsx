import React from 'react';
import Logo from '../assets/images/StarbuckLogo.webp'
import '../styles/MyFooter.css'
const MyFooter = () => {
    return (
        <footer className='footer'>
            <div className='colum1'>
                <img className='logoFooter' src={Logo} alt='Logo Starbuck' />
            </div>
            <div className='colum2'>
                <h1>Menu</h1>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>AboutUS</li>
                </ul>
            </div>
            <div className='colum3'>
                <h1>Menu2</h1>
                <ul>
                    <li>FAQ</li>
                    <li>Message</li>
                    <li>Quizz</li>
                    <li>Test</li>
                </ul>
            </div>
            <div className='colum4'>
                <h1>Menu3</h1>
                <ul>
                    <li>ShowCase</li>
                    <li>Support</li>
                    <li>Service</li>
                </ul>
            </div>
        </footer>
    );
};

export default MyFooter;