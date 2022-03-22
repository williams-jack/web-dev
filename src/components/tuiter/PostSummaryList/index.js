import React from "react";
import PostSummaryListItem from "./post-summary-list-item";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (
        <ul class="list-group">
            {posts.map((post) => {
                return <PostSummaryListItem post={post} />;
            })}
        </ul>
    );
};

export default PostSummaryList;
