import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="container pt-2">
        <div class="row">
<!--            left content-->
            <div class="col-2 col-xl-2 col-lg-1">
                ${NavigationSidebar()}
            </div>

<!--            main content-->
            <div class="col-10 col-xl-6 col-lg-7">
<!--                search bar-->
                <div class="row">
                    <div class="col-10">
                        <div class="position-relative">
                            <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                            <span class="position-absolute wd-search-tuiter">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-2">
                        <i class="fas fa-cog fa-2x float-end" style="color: dodgerblue"></i>
                    </div>
                </div>

<!--                navigation bar-->
                <ul class="nav nav-tabs mt-2 mb-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">
                            For You
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
<!--                starship  image-->
                <div class="position-relative">
                    <img src="../../images/starship.jpg" width="100%"/>
                    <h1 class="position-absolute bottom-0 text-white">SpaceX's Starship</h1>
                </div>
<!--                Tuit below starship-->
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div>
                                    <b>ReactJS</b>
                                    <span class="fa-stack wd-font8">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span class="text-secondary"> - 2h</span>
                                </div>
                                <div class="fw-bolder">
                                    React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs
                                </div>
                            </div>
                            <div class="col-4 my-auto">
                                <img class="float-end" src="../../images/reactlogo.png" height="100px"/>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">
                                <div>
                                    <b>JavaScript</b>
                                    <span class="fa-stack wd-font8">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span class="text-secondary"> - 2h</span>
                                </div>
                                <div class="fw-bolder">
                                    JavaScript is programming language that can run on browsers as well as desktops
                                </div>
                                <div class="text-secondary">
                                    123K Tweets
                                </div>
                            </div>
                            <div class="col-4 my-auto">
                                <img class="float-end" src="../../images/JS.png" height="100px"/>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div class="fw-bolder">
                                    JQuery
                                </div>
                                <div class="text-secondary">
                                    123K Tweets
                                </div>
                            </div>
                            <div class="col-4 my-auto">
                                <img class="float-end" src="../../images/JQuery.jpg" height="100px"/>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-8">
                                <div class="text-secondary">
                                    Web Development
                                </div>
                                <div>
                                    <b>NodeJS</b>
                                    <span class="fa-stack wd-font8">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span class="text-secondary"> - 2h</span>
                                </div>
                                <div class="text-secondary">
                                    123K Tweets
                                </div>
                            </div>
                            <div class="col-4 my-auto">
                                <img class="float-end" src="../../images/NodeJS.png" height="100px"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

<!--            right side bar-->
            <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                ${WhoToFollowList()}

            </div>
        </div>
    </div>
   `);
}
$(exploreComponent);


