import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    // const tuitArray = useSelector(state => state.tuits)

    const {tuits, loading} = useSelector(               // grab tuits and loading flag from reducer
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {                               // on component load
        dispatch(findTuitsThunk())                      // invoke find tuits thunk to fetch tuits and
    }, [])                                          // put them in the reducer's store so we can

    return (                                            // extract them with useSelector() and render
        <ul className="list-group">
            {
                loading &&                              // if loading flag is true, then show a
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <TuitItem key={tuit.id} tuit={tuit}/>)
            }
        </ul>
    )
}

export default TuitsList;
