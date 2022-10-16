import who from "./Who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";



const WhoToFollowList = () => {
    return(`
    <div class="list-group">
        <div class="list-group-item fw-bolder">
            Who to follow
        </div>
        ${who.map(user => WhoToFollowListItem(user)).join('')}
    </div>
    `);
}

export default WhoToFollowList;