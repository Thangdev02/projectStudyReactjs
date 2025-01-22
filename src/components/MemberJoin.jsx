import React, { useState } from 'react';

const MemberJoin = () => {
    const [member, setMember] = useState(4);
    function handleJoin(){
        setMember(member + 1); 
    }
    function handleLeave(){
        setMember(member - 1);
    }
// Member hien tai la 20, thi bam join se lay so 20 la member tai + 1 => 21
    return (
        // jsx
        <div>
            <h1>This is MemberJoin : {member} member</h1>
            <button onClick={handleJoin}>Join</button>
            <button onClick={handleLeave}>Roi khoi</button>
            {/* Event - onClick */}
        </div>
    );
};

export default MemberJoin