const WhoToFollowListItem = (avatarIcon, userName, handle) => {
    return `
    <li class="list-group-item">
        <div class="float-start d-flex">
            <img
                src="${avatarIcon}"
                class="wd-explore-who-to-follow-profile-image"
            />
            <div
                class="wd-who-to-follow-user-details ps-xl-2"
            >
                <div
                    class="wd-explore-who-to-follow-display-name"
                >
                    ${userName} <i class="fas fa-check-circle"></i>
                </div>
                <div
                    class="wd-explore-who-to-follow-handle"
                >
                    @${handle}
                </div>
            </div>
        </div>

        <button
            class="btn-sm btn-primary wd-follow-button-who-to-follow float-end"
        >
            Follow
        </button>
    </li>
    `;
};

export default WhoToFollowListItem;
