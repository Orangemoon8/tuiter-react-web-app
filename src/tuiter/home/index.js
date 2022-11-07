import React from "react";
// import postsArray from './posts.json';
// import PostItem from "./post-item";
import TuitsList from "../tuits-list/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        // <div className={"list-group"} >
        //     {
        //         postsArray.map(post => <PostItem key={post._id} post={post}/>)
        //     }
        // </div>
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    )
}

export default HomeComponent;