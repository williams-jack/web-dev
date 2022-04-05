import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        updateTuit(dispatch, {
            ...tuit,
            likes: !tuit.liked ? tuit.likes + 1 : tuit.likes - 1,
            liked: !tuit.liked,
        });
    };

    const dislikeTuit = () => {
        updateTuit(dispatch, {
            ...tuit,
            dislikes: !tuit.disliked
                ? (tuit.dislikes || 0) + 1
                : (tuit.dislikes || 0) - 1,
            disliked: !tuit.disliked,
        });
    };

    return (
        <div className="d-flex">
            <span className="pe-3">
                <i
                    className={`fas fa-heart ${tuit.liked && "text-danger"}`}
                    onClick={likeTuit}
                ></i>{" "}
                - {tuit.likes || 0}
            </span>
            <span className="pe-3">
                <i className="fas fa-retweet"></i> - {tuit.retuits || 0}
            </span>
            <span className="pe-3">
                <i className="fas fa-comment"></i> - {tuit.replies || 0}
            </span>
            <span className="pe-3">
                <i
                    className={`fas fa-thumbs-down ${
                        tuit.disliked && "text-primary"
                    }`}
                    onClick={dislikeTuit}
                ></i>{" "}
                - {tuit.dislikes || 0}
            </span>
        </div>
    );
};

export default TuitStats;
