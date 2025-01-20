import React from 'react';
import CardProduct from '../components/CardProduct';

const StorePage = () => {
    //props, props la truyen du lieu tu cha xuong con de render
    return (
        <div>
            <h1>Welcome StorePage</h1>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', gap:'1rem'}}>
                <CardProduct
                    productImage='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltd9nl7tikecec.webp'
                    productName='Gundam'
                    productPrice='100$'
                    discount='20%'
                />
                <CardProduct
                    productImage='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webp'
                    productName='May say toc'
                    productPrice='20$'
                />
                 <CardProduct
                    productImage='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webp'
                    productName='May say toc'
                    productPrice='20$'
                />
                 <CardProduct
                    productImage='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webphttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lozov6pi3kgr65.webp'
                    productName='May say toc'
                    productPrice='20$'
                />
            </div>
        </div>
    );
};

export default StorePage;