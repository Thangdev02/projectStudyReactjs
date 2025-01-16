import React, { useState } from 'react';

const Counter2 = () => {

    //useState - React Hook
    // const number = 100; //tao 1 bien bth
    const [number, setNumber] = useState(10) //initial state
    //dung de quan ly trang thai cua 1 bien 
    function cong1(){
        setNumber(number + 1);
    }
    function tru1(){
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>Counter: {number} </h1>
            <button onClick={cong1}>Cong 1</button>
            <button onClick={tru1}>Tru 1</button> 

        </div>
    );
};

export default Counter2;