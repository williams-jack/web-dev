import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const createPostListItem = (data) => {
    if ("tweets" in data) {
        return PostSummaryItem(
            data.topic,
            data.userName,
            data.time,
            data.title,
            data.image,
            data.tweets
        );
    } else {
        console.log("No tweets found.");
        return PostSummaryItem(
            data.topic,
            data.userName,
            data.time,
            data.title,
            data.image,
            null
        );
    }
};

const PostSummaryList = () => {
    return `<ul class="list-group">
        ${posts
            .map((post) => {
                return createPostListItem(post);
            })
            .join("")}
    </ul>`;
};

export default PostSummaryList;
