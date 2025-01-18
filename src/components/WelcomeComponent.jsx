import React, { useEffect, useState } from 'react';

const WelcomeComponent = () => {
    const [username, setUsername] = useState('');
    // const [counter, setCounter] = useState(0);
    //useEffect -> 100% su dung trong moi du an
    // 1. useEffect la 1 ham cho phep tu dong chay khi vua vao trang (render)
    // 2. useEffect se tu dong chay lai khi dependency list co state bi thay doi (re-redener)
    //Arrow function
    useEffect(() => {
        setUsername('John');
        // setCounter(counter + 1); //2
    }, []); //[] denpendency list, cai state nao de trong nay, thi neu no co su thahy doi, thi se chay lai useEffect
    //neu dependency list trong, thi no khong biet no check cai state nao
    return (
        <div>
            <h1>Welcome Components</h1>
            <h2>Welcome <span style={{ color: "green" }}> {username} </span>to our application</h2>

            {/* <h1>Counter: {counter}</h1> */}

        </div>
    );
};

export default WelcomeComponent;