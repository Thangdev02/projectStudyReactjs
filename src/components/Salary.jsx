import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Salary = () => {
    const[salary, setSalary] = useState(1000);
    const [data, setData] = useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
           setData(res.data);
       })
    },[])
    return (
        <div>
           {data.map(item => {
               return <h1 key={item.id}>Email: {item.email}</h1>
           })}
        </div>
    );
};

export default Salary;