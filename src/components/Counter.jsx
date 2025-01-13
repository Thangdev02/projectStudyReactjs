import React, { useState } from 'react';

const Counter = () => {
    //nhiem vu: la co 1 cai so, sau do bam nut + thi lay so do +1 len //any chinh la kieu gi cung dc
    const [counter, setCounter] = useState(0); //
    function cong1() {
        setCounter(counter + 1);
    }
    function tru1() {
        setCounter(counter - 1);
    }
    function nhan2() {
        setCounter(counter * 2)
    }
    function nhan2tru1() {
        setCounter((counter * 2) - 1)
    }

    //tui em se co 1 state de luu tru 1 cai mang, gia tri trong mang chinh la du lieu tu database
    return (
        <div>
            <h1>This is Counter components</h1>
            <button onClick={cong1}>Cong 1</button>
            <h2>Result: {counter} </h2>
            <button onClick={tru1}>Tru</button>
            <button onClick={nhan2}>Nhan 2</button>
            <button onClick={nhan2tru1}>Nhan 2 Tru 1</button>
        </div>
    );
};

export default Counter;