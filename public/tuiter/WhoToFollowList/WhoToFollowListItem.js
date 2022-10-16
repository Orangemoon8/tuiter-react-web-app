
const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
           <div class="row">
               <div class="col-2 my-auto">
                   <img src='${who.avatarIcon}' class="rounded-circle w-100"/>
               </div>
               <div class="col-7 my-auto">
                   <div>
                       <span class="fw-bolder">
                            ${who.userName}
                       <span/>
                       <span class="fa-stack wd-font8">
                            <i class="fa-solid fa-circle fa-stack-2x"></i>
                            <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                   </div>
                   <div>
                       ${who.handle}
                   </div>
               </div>
               <div class="col-3 my-auto">
                   <button class="btn btn-primary rounded-pill float-end">
                       Follow
                   </button>
               </div>
           </div>
        </div>
    `);
}

export default WhoToFollowListItem;
