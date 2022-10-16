const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-8">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div>
                        <b>${post.userName}</b>
                        <span class="fa-stack wd-font8">
                            <i class="fa-solid fa-circle fa-stack-2x"></i>
                            <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="text-secondary">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${post.view}
                    </div>
                </div>
                <div class="col-4 my-auto">
                    <img class="float-end" src="${post.image}" height="100px"/>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;
