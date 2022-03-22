import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
            <ul className="list-group">
                {who.map((whoItem) => {
                    return <WhoToFollowListItem who={whoItem} />;
                })}
            </ul>
        </div>
    );
};

export default WhoToFollowList;
