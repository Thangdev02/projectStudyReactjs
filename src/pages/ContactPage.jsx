import React from 'react';
import CardVisit from '../components/CardVisit';

const ContactPage = () => {

   
    // 
    return (
        <div>
            <h1>This is contact page</h1>
            <CardVisit nameCompany='Starbuck' address='Viet Nam' phone='0123456789' />
            <CardVisit nameCompany='Starbuck2' address='Viet Nam' phone='0123456789' />
        </div>
    );
};

export default ContactPage;