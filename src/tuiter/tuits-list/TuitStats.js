import React from "react";

const liked = (tuit) => {
    if(tuit.liked) {
        return <span><i className="fa fa-heart text-danger"></i></span>;
    } else {
        return <span><i className="fa fa-heart"></i></span>;
    }
}

const TuitStats = (tuit) => {
    return (
        <div className="row pt-3 ps-3 text-secondary">
            <div className="col-3">
                <span><i className="fa fa-comment"></i></span>
                <span className="ps-2">{tuit.replies}</span>
            </div>
            <div className="col-3">
                <span><i className="fa fa-retweet"></i></span>
                <span className="ps-2">{tuit.retuits}</span>
            </div>
            <div className="col-3">
                {liked(tuit)}
                <span className="ps-2">{tuit.likes}</span>
            </div>
            <div className="col-3">
                <span><i className="fa fa-upload"></i></span>
            </div>
        </div>
    )
}

export default TuitStats;

// <div className="row pt-3 ps-3 text-secondary">
//     <div className="col-3">
//         <span><i className="fa fa-comment"></i></span>
//         <span className="ps-2">{tuit.comment_num}</span>
//     </div>
//     <div className="col-3">
//         <span><i className="fa fa-retweet"></i></span>
//         <span className="ps-2">{tuit.share_num}</span>
//     </div>
//     <div className="col-3">
//                             <span>
//                                 <i className="fa fa-heart"></i>
//                             </span>
//         <span className="ps-2">{tuit.like_num}</span>
//     </div>
//     <div className="col-3">
//         <span><i className="fa fa-upload"></i></span>
//     </div>
// </div>