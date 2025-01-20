import React, { useState } from 'react';

const ProfilePage = () => {

    const user = {
        // 1 doi tuong / object
        fullName: 'Le Quoc Thang',
        email: 'thangdev@gmail.com',
        avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
        phone: '0123456789',
        address: 'Ton Dan',
        city: 'Ho Chi Minh',
        gender: false,
        dob: '01/01/2000'
    }

    const [isLogin, setIsLogin] = useState(true)
    const [listProduct, setListProduct] = useState([]) 
    console.log(listProduct.length)

    return (
        <div>
            <img src={user.avatar} alt={user.fullName} />
            <h1>{user.fullName}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            {user.gender ? <h1>Female</h1> : <h1>Male</h1>}
            {listProduct.length > 0 ? <h1>Co san pham</h1> : <h1>Chua co san pham</h1>}
             
            <p>{user.address}, {user.city}</p>
            <p>{user.dob}</p>
        </div>
    );
};

export default ProfilePage;