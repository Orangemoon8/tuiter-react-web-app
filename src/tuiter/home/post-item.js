import React from "react";


const PostItem = (
    {post = {
        "avatarIcon": "starship.jpg",
        "username": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "text": "Amazing show about @inspiration4x mission!",
        "postImage": "NASA.jpg",
        "url": "netflix.com",
        "comment_num": "4.2K",
        "share_num": "3.5K",
        "like_num": "37.5K",
        "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "post-content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ..."
    }}
) => {
    return(
        <div className="list-group-item bg-body">
            <div className="row">
                <div className="col-2">
                    <img alt="lost picture"src={`/images/${post.avatarIcon}`} className="rounded-circle" style={{height:'45px',width:'45px'}}/>
                </div>
                
                <div className="col-10 ps-3">
                    <div className="row">
                        <div className="col-10">
                            <div>
                                <span className="fw-bolder">
                                    {post.username}
                                </span>
                                <span className="fa-stack wd-font8">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                                </span>
                                <span className="text-secondary">
                                    @{post.handle}
                                </span>
                                <span className="text-secondary">
                                    · {post.time}
                                </span>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-ellipsis float-end text-secondary"></i>
                        </div>
                    </div>
                    <div className="pt-1">
                        {post.text}
                    </div>
                </div>
                
            </div>
            

            <div className="row pt-3">
                <div className="col-2"></div>
                <div className="col-10 ps-3">
                    <div className="border border-3 border-light" style={{borderRadius:'25px'}}>
                        <div>
                            <img alt="lost picture" src={`/images/${post.postImage}`}
                                 className={`border-3 border-light w-100 ${post.title===null?'':'border-bottom'}`}
                            style={{borderRadius: `${post.title===null?'18px 18px 18px 18px':'18px 18px 0px 0px'}`}}/>
                        </div>
                        <div className="ps-2 pb-2 pt-2" style={{display: `${post.title===null ? 'none' : ''}`}}>
                            <div>
                                {post.title}
                            </div>
                            <div className="text-secondary pt-3" style={{display: `${post.postcontent===null ? 'none' : ''}`}}>
                                {post.postcontent}
                            </div>
                            <div className="text-secondary" style = {{display: `${post.url===null ? 'none' : ''}`}}>
                                <span><i className="fa fa-link"></i></span>
                                <span>{post.url}</span>
                            </div>
                        </div>
                    </div>


                    <div className="row pt-3 ps-3 text-secondary">
                        <div className="col-3">
                            <span><i className="fa fa-comment"></i></span>
                            <span className="ps-2">{post.comment_num}</span>
                        </div>
                        <div className="col-3">
                            <span><i className="fa fa-retweet"></i></span>
                            <span className="ps-2">{post.share_num}</span>
                        </div>
                        <div className="col-3">
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                            <span className="ps-2">{post.like_num}</span>
                        </div>
                        <div className="col-3">
                            <span><i className="fa fa-upload"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default PostItem;

