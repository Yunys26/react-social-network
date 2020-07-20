import React from "react";
import Posts from "../PostsContent/Posts";
import avatar from '../avatar.jpg'

const Content = (props) => {
    return (
        <div>
            <div className="content__info">
                <img src="" alt="user"></img>
                <div className="content__info__data">
                    <h2>Dmirty K.</h2>
                    <ul>
                        <li>Date of birth: 2 january</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU'11</li>
                        <li>Web Site:</li>
                    </ul>
                </div>
            </div>
            <div className="content__send">
                <form>
                    <h2>My Posts</h2>
                    <input placeholder="Your new's..."/>
                    <button>Send</button>
                </form>
            </div>
            <div>
                <Posts userImg={avatar} text="Hello, I'm Pitter"/>
                <Posts userImg={avatar} text="Hello, I'm Bob"/>
            </div>
        </div>
    );
};

export default Content