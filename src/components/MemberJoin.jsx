import React, { useEffect, useState } from 'react';

const MemberJoin = () => {
    const [member, setMember] = useState(0);
    const [memberName, setMemberName] = useState('');
    const [memberAddress, setMemberAddress] = useState('');

    function handleJoin() {
        setMember(member + 1);
    }
    
    function handleLeave() {
        setMember(member - 1);
    }

    useEffect(() => {
        //sau khi login minh se lay duoc memberName = Thang tu database
        setMember(member + 1);
    },[]);


    //UseEffect la 1 reacthook, va no co 2 tinh chat
    //1.Render, no se tu dong chay useEffect lan dau tien khi trang cua minh duoc goi toi (khi components duoc render)
    //2.Re-render, no se tu dong chay LAI useEffect khi state trong denpendency list bi thay doi
    //Denpendency list la 1 [] dung de nhet cai state vao, khi ma cai state do co su thay doi thi no se chay co che re-render
    // Member hien tai la 20, thi bam join se lay so 20 la member tai + 1 => 21
    return (
        // jsx
        <div>
            <h1>Hello {memberName}</h1>
            <h2>Address: {memberAddress}</h2>
            <h1>This is MemberJoin : {member} member</h1>
            <button onClick={handleJoin}>Join</button>
            <button onClick={handleLeave}>Roi khoi</button>
            {/* Event - onClick */}
        </div>
    );
};

export default MemberJoin