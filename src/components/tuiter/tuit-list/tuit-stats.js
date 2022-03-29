import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: "like-tuit", tuit });
    };

    return (
        <div className="d-flex">
            <span className="pe-3">
                {tuit.liked ? (
                    <i
                        className="fas fa-heart text-danger"
                        onClick={likeTuit}
                    ></i>
                ) : (
                    <i className="fas fa-heart" onClick={likeTuit}></i>
                )}{" "}
                - {tuit.stats.likes}
            </span>
            <span className="pe-3">
                <i className="fas fa-retweet"></i> - {tuit.stats.retuits}
            </span>
            <span className="pe-3">
                <i className="fas fa-comment"></i> - {tuit.stats.replies}
            </span>
        </div>
    );
};

export default TuitStats;
