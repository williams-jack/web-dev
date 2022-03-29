import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <div>
            <ul className="list-group">
                {who.map((whoItem) => {
                    return <WhoToFollowListItem who={whoItem} />;
                })}
            </ul>
        </div>
    );
};

export default WhoToFollowList;
