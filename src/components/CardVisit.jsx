import React from 'react';

const CardVisit = (props) => {
    return (
        <div style={{background:'grey', color:'white', width:'fit-content',padding:'1rem', borderRadius:'16px', margin:'1rem'}}>
            <h1>Card Visit cua chung toi</h1>
            <h2>Name Company: {props.nameCompany}</h2>
            <h3>Address: {props.address}</h3>
            <h4>Phone: {props.phone}</h4>
        </div>
    );
};

export default CardVisit;