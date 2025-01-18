import React from 'react';

const ProfilePage = () => {

    const user = {
        // 1 doi tuong / object
        fullName: 'Your Name',
        email: 'youremail@gmail.com',
        avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
        phone: '0123456789',
        address: 'Your Address',
        city: 'Your City',
        gender: true,
        dob: '01/01/2000'
    }
    // tim cach de hien gender, neu gender = true thi hien ra chu female, nguoc lai neu bang flase = male
    return (
        <div>
            <h1 style={{ color: 'green' }}>{user.fullName}</h1>
        </div>
    );
};

export default ProfilePage;