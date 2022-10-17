
const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
           <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="../HomeScreen/index.html" class="${active === 'home'? 'active':''}list-group-item list-group-item-action d-flex">
                    <span><i class="fas fa-home"> </i></span>
                    &nbsp;
                    <span class="d-none d-xl-block d-xl-inline">Home</span>
            </a>
            <a href="../ExploreScreen/index.html" class="${active === 'explore' ? 'active':''}list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-hashtag"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-bell"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-envelope"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-bookmark"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-list"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span><i class="fas fa-user"></i></span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex">
                <span class="fa-stack fa-2xs">
                    <i class="fa-solid fa-circle fa-stack-2x"></i>
                    <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse" style="color: white"></i>
                </span>
                &nbsp;
                <span class="d-none d-xl-block d-xl-inline">More</span>
            </a>
       </div>
       <button class="btn btn-primary float-start w-100 wd-tweet-size mt-2 rounded-pill">
           Tweet
       </button>
 `);
}
// $("#wd-navigationsidebar").append(`${NavigationSidebar()}`)
export default NavigationSidebar;
