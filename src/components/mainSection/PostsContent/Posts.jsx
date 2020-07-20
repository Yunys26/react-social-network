import React from 'react';

function Posts (props) {
    return (
        <div className="content__posts">
            <img src={props.userImg} alt="user" width="48px" height="48px"></img>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Posts;