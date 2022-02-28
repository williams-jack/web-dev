const PostSummaryItem = (topic, userName, time, title, image, tweets) => {
    console.log(tweets);
    return `
    <li class="list-group-item">
        <div class="d-flex justify-content-between">
            <div>
                ${
                    topic !== ""
                        ? `<div
                        class="wd-tuit-details wd-tuit-text-small"
                    >
                        ${topic}
                    </div>`
                        : ""
                }
                <div class="wd-tuit-text-small">
                    <span class="wd-tuit-text-bold">
                        ${userName}
                        <i
                            class="fas fa-check-circle"
                        ></i>
                    </span>
                    <span class="wd-tuit-details">
                        - ${time}</span
                    >
                </div>
                ${
                    title !== ""
                        ? `
                <div
                    class="wd-tuit-text-small wd-tuit-text-bold"
                >
                    ${title}
                </div>
                `
                        : ""
                }
                ${
                    tweets
                        ? `
                        <div
                            class="wd-tuit-details wd-tuit-text-small">
                                ${tweets} Tweets
                        </div>
                    `
                        : ""
                }
            </div>
            <img
                src="${image}"
                alt=""
                class="wd-tuit-associated-photo"
            />
        </div>
    </li>
    `;
};
export default PostSummaryItem;
