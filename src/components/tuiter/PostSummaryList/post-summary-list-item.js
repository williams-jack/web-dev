import React from "react";

const PostSummaryListItem = ({
    post = {
        topic: "Web Development",
        userName: "ReactJS",
        time: "2h",
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        image: "/tuiter/assets/react-logo.png",
    },
}) => {
    console.log(post.tweets);
    return (
        <li class="list-group-item">
            <div class="d-flex justify-content-between">
                <div>
                    {post.topic && post.topic !== "" && (
                        <div class="wd-tuit-details wd-tuit-text-small">
                            {post.topic}
                        </div>
                    )}
                    {post.userName && post.userName !== "" && (
                        <div class="wd-tuit-text-small">
                            <span class="wd-tuit-text-bold">
                                {post.userName}
                                <i class="fas fa-check-circle"></i>
                            </span>
                            <span class="wd-tuit-details">- {post.time}</span>
                        </div>
                    )}
                    {post.title && post.title !== "" && (
                        <div class="wd-tuit-text-small wd-tuit-text-bold">
                            {post.title}
                        </div>
                    )}
                    {post.tweets && (
                        <div class="wd-tuit-details wd-tuit-text-small">
                            {post.tweets} Tweets
                        </div>
                    )}
                </div>
                <img src={post.image} alt="" class="wd-tuit-associated-photo" />
            </div>
        </li>
    );
};
export default PostSummaryListItem;
