import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import {Route, Routes} from "react-router";
let x =6;

function Tuiter() {
    return (
        <div className={"row mt-2"}>
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-7" style={{position: "relative"}}>
                <NavigationSidebar/>
                <PostSummaryList/>
            </div>

            <div className="col-lg-3 col-xl-3 d-lg-block d-sm-none d-md-none">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default Tuiter
