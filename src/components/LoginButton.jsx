import React, { useState } from 'react';

const LoginButton = () => {
    const [isLogin, setIsLogin] = useState(false); //state quan li trang thai cua loggin , mac dinh la chua login
    function Login(){
        setIsLogin(true);
    }
  

    return (
        <div>
            {isLogin ? <h1>Username</h1> : <button onClick={Login}>Login</button>}
            {/* //toan tu 3 ngoi
            // if(isLogin) {
                return <h1>UserName</h1>
                }
                else{
                <button> Login </button>
                }
            //  */}
        </div>
    );
};

export default LoginButton;