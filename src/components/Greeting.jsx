import React, { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState('');
    function login() {
        setName('Thang')
    }
    return (
        <div>
            <button onClick={login}>Login</button>
            <h1>Welcome {name}</h1>
        </div>
    );
};

export default Greeting;