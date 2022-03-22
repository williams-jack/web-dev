import React from "react";
import "./explore.css";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen/explore-component";
const Tuiter = () => {
    return (
        <div className="row mt-2">
            <NavigationSidebar active="explore" />
            <ExploreComponent />
            <WhoToFollowList />
        </div>
    );
};

export default Tuiter;
