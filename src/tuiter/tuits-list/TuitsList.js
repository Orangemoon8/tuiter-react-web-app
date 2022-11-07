import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitArray = useSelector(state => state.tuits)

    return (
        <ul className="list-group">
            {
                tuitArray.map(tuit => <TuitItem key={tuit.id} tuit={tuit}/>)
            }
        </ul>
    )
}

export default TuitsList;
