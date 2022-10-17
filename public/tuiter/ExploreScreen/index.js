import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

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
                ${ExploreComponent()}
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


