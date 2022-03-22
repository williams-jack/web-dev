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
        <li class="list-group-item">
            <div class="float-start d-flex">
                <img
                    src={who.avatarIcon}
                    class="wd-explore-who-to-follow-profile-image"
                />
                <div class="wd-who-to-follow-user-details ps-xl-2">
                    <div class="wd-explore-who-to-follow-display-name">
                        {who.userName} <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="wd-explore-who-to-follow-handle">
                        @{who.handle}
                    </div>
                </div>
            </div>
            <button class="btn btn-sm btn-primary wd-follow-button-who-to-follow float-end">
                Follow
            </button>
        </li>
    );
};

export default WhoToFollowListItem;
