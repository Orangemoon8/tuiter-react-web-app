
const PostItem = (post) => {

    return(`
        <div class="list-group-item bg-body">
        
<!--        first row for user avatar and his post -->
            <div class="row">
            
                <div class="col-2">
                    <img src="${post.avatarIcon}" class="rounded-circle" style="height: 45px; width:45px;">
                </div>
                
                <div class="col-10 ps-3">
                    <div class="row">
                        <div class="col-10">
                            <div>
                                <span class="fw-bolder">
                                    ${post.username}
                                </span>
                                <span class="fa-stack wd-font8">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-check fa-stack-1x fa-inverse text-black"></i>
                                </span>
                                <span class="text-secondary">
                                    @${post.handle}
                                </span>
                                <span class="text-secondary">
                                    · ${post.time}
                                </span>
                            </div>
                        </div>
                        <div class="col-2">
                            <i class="fa fa-ellipsis float-end text-secondary"></i>
                        </div>
                    </div>
                    <div class="pt-1">
                        ${post.text}
                    </div>
                </div>
                
            </div>
            
<!--            start of second row for article, imgae and other contents  -->
            <div class="row pt-3">
                <div class="col-2"></div>
                <div class="col-10 ps-3">
                    <div class="border border-3 border-light" style="border-radius: 25px;">
                        <div>
                            <img src="${post.postImage}" class="border-3 border-light w-100 ${post.title===null?'':'border-bottom'}" 
                            style="border-radius: ${post.title===null?'15px 15px 15px 15px':'15px 15px 0px 0px'};">
                        </div>
                        <div class="ps-2 pb-2 pt-2" style="display: ${post.title===null ? 'none' : ''};">
                            <div>
                                ${post.title}
                            </div>
                            <div class="text-secondary pt-3" style="display: ${post.postcontent===null ? 'none' : ''};">
                                ${post.postcontent}
                            </div>
                            <div class="text-secondary" style = "display: ${post.url===null ? 'none' : ''};">
                                <span><i class="fa fa-link"></i></span>
                                <span>${post.url}</span>
                            </div>
                        </div>
                    </div>
<!--                    start of third row for icons-->
                    <div class="row pt-3 ps-3 text-secondary">
                        <div class="col-3">
                            <span><i class="far fa-comment"></i></span>
                            <span class="ps-2">${post.comment_num}</span>
                        </div>
                        <div class="col-3">
                            <span><i class="fa fa-retweet"></i></span>
                            <span class="ps-2">${post.share_num}</span>
                        </div>
                        <div class="col-3">
                            <span>
                                <i class="far fa-heart"></i>
                            </span>
                            <span class="ps-2">${post.like_num}</span>
                        </div>
                        <div class="col-3">
                            <span><i class="fa fa-upload"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    `);

}

export default PostItem;