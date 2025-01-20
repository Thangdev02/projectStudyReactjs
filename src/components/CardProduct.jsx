import React from 'react';

const CardProduct = (props) => {
    return (
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '300px', padding: '1rem' }}>
                <img style={{ width: '90%' }} src={props.productImage} />
                <h2>{props.productName}</h2>
                <p>{props.productPrice}</p>
                <p>{props.discount}</p>
        </div>
    );
};

export default CardProduct;