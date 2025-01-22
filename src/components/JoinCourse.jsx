import React, { useState } from 'react';

const JoinCourse = () => {
    const [courseMember, setCourseMember] = useState(0);

    function joinCourse() {
        setCourseMember(courseMember + 1);
    }

    function hocXong() {
        setCourseMember(courseMember - 1);
    }
    return (
        <div>
            <button onClick={joinCourse}>Tham gia</button>
            <h1>Da co {courseMember} nguoi tham gia vao khoa hoc</h1>
            <button onClick={hocXong}>Hoc xong roi</button>
        </div>
    );
};

export default JoinCourse;