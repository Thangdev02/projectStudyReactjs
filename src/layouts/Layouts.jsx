import React from 'react';
import Myheader from './Myheader';
import MyFooter from './MyFooter';

const Layouts = ({children}) => {
    return (
        <div>
            <Myheader/>
            <main>
                {children}
            </main>
            <MyFooter/>
        </div>
    );
};

export default Layouts;