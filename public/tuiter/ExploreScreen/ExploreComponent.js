import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
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
                
           <!--  starship  image  with overlaid text-->
            <div class="position-relative">
                <img src="../../images/starship.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 text-white">SpaceX's Starship</h1>
            </div>
            
<!--            post content-->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
