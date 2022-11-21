import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from './TuitStats';
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";




const TuitItem = (
    {
        tuit = { "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "This is the title of the tuit: Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "tuit": "This is the content of the tuit and meaningless text aaaaaaaaaaaaaaaa",
            "time": "2h",
            "image": "TESLA.jpg" ,
            "liked":  true, "likes": 2345,
            "replies":  123,
            "retuits": 432
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }

    return(
        <div className="list-group-item">

            <div className="row">
                <div className="col-2">
                    <img alt="lost picture"src={`/images/${tuit.image}`} className="rounded-circle" style={{height:'45px',width:'45px'}}/>
                </div>

                <div className="col-10 ps-3">
                    <div className="row">
                        <div className="col-10">
                            <div>
                                <span className="fw-bolder">
                                    {tuit.userName}
                                </span>
                                <span className="fa-stack wd-font8">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                                </span>
                                <span className="text-secondary">
                                    {tuit.handle}
                                </span>
                                <span className="text-secondary">
                                    · {tuit.time}
                                </span>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-ellipsis float-end text-secondary"></i>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="pt-1">
                        {tuit.text}
                    </div>
                </div>

            </div>

            <div className="row pt-3">
                <div className="col-2"></div>
                <div className="col-10 ps-3">
                    <div className="ps-2 pb-2" style={{display: `${tuit.title===null ? 'none' : ''}`}}>
                        <div>
                            {tuit.title}
                        </div>
                        <div className="pt-1" style={{display: `${tuit.tuit===null ? 'none' : ''}`}}>
                            {tuit.tuit}
                        </div>
                    </div>


                    <TuitStats
                        id={tuit._id}
                        replies={tuit.replies}
                        retuits={tuit.retuits}
                        likes={tuit.likes}
                        liked={tuit.liked}
                        dislikes={tuit.dislikes}
                        disliked={tuit.disliked}
                    />


                </div>
            </div>

        </div>

    );
}


export default TuitItem;
