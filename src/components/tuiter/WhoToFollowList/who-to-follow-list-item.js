/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const WhoToFollowListItem = ({
    who = {
        avatarIcon: "/tuiter/assets/nasa-logo.jpg",
        userName: "NASA",
        handle: "NASA",
    },
}) => {
    return (
        <li className="list-group-item">
            <div className="float-start d-flex">
                <img
                    src={who.avatarIcon}
                    className="wd-explore-who-to-follow-profile-image"
                />
                <div className="wd-who-to-follow-user-details ps-xl-2">
                    <div className="wd-explore-who-to-follow-display-name">
                        {who.userName} <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="wd-explore-who-to-follow-handle">
                        @{who.handle}
                    </div>
                </div>
            </div>
            <button className="btn btn-sm btn-primary wd-follow-button-who-to-follow float-end">
                Follow
            </button>
        </li>
    );
};

export default WhoToFollowListItem;
