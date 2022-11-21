import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const liked = (tuit) => {
    if(tuit.liked) {
        return <span><i className="fa fa-heart text-danger"></i></span>;
    } else {
        return <span><i className="fa fa-heart"></i></span>;
    }
}

const TuitStats = (tuit) => {
    // console.log(tuit.tuit)
    const dispatch = useDispatch();

    return (
        <div className="row pt-3 ps-3 text-secondary">
            <div className="col-2">
                <span><i className="fa fa-comment"></i></span>
                <span className="ps-2">{tuit.replies}</span>
            </div>
            <div className="col-2">
                <span><i className="fa fa-retweet"></i></span>
                <span className="ps-2">{tuit.retuits}</span>
            </div>

            <div className="col-2">
                <i onClick={ () => {
                    dispatch(updateTuitThunk(
                        {
                            _id: tuit.id,
                            liked: !tuit.liked,
                            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
                        }
                    ))
                }} className={`fa fa-heart ${tuit.liked ? "text-danger" : ""}`}></i>
                <span>{tuit.likes}</span>
            </div>
            <div className="col-2">
                <i onClick={ () => {
                    dispatch(updateTuitThunk(
                        {
                            _id: tuit.id,
                            disliked: !tuit.disliked,
                            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1
                        }
                    ))
                }} className={`fa fa-thumbs-down ${tuit.disliked ? "text-black" : ""}`}></i>
                <span>{tuit.dislikes}</span>
            </div>

            <div className="col-2">
                <span><i className="fa fa-upload"></i></span>
            </div>
        </div>
    )
}

export default TuitStats;




// <div className="col-2">
//     {liked(tuit)}
//     <span className="ps-2">{tuit.likes}</span>
// </div>








// <div className="col-2">
//     <i onClick={() => dispatch(updateTuitThunk({
//         _id: id,
//         liked: !liked,
//         likes: liked ? likes - 1 : likes + 1
//     }))} className={`fa fa-heart ${liked ? "text-danger" : ""}`}></i>
//     <span>{likes}</span>
// </div>
// <div className="col-2">
//     <i onClick={() => dispatch(updateTuitThunk({
//         _id: id,
//         disliked: !disliked,
//         dislikes: disliked ? dislikes - 1 : dislikes + 1
//     }))} className={`fa-regular fa-thumbs-down ${disliked ? "text-black" : ""}`}></i>
//     <span>{dislikes}</span>
// </div>













// <div className="row pt-3 ps-3 text-secondary">
//     <div className="col-3">
//         <span><i className="fa fa-comment"></i></span>
//         <span className="ps-2">{tuit.replies}</span>
//     </div>
//     <div className="col-3">
//         <span><i className="fa fa-retweet"></i></span>
//         <span className="ps-2">{tuit.retuits}</span>
//     </div>
//     <div className="col-3">
//         {liked(tuit)}
//         <span className="ps-2">{tuit.likes}</span>
//     </div>
//     <div className="col-3">
//         <span><i className="fa fa-upload"></i></span>
//     </div>
// </div>