import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";



function exploreHomeScreen() {
    // split a row into 3 column of different ratio according to screen size
    $('#wd-homescreen').append(`
        <div class="row mt-3">
            <div class="col-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${PostList()}
            </div>
            <div class="col-lg-4 col-xl-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
   `);
}


$(exploreHomeScreen);


