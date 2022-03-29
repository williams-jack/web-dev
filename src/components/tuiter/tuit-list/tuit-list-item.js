import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({ type: "delete-tuit", tuit });
    };

    return (
        <div className="list-group-item d-flex mb-1">
            <div>
                <div>
                    <img
                        src={tuit["avatar-image"]}
                        alt="Tuiter user's avatar."
                        className="wd-tuit-avatar-image"
                    />
                </div>
            </div>
            <div className="ps-sm-2 ps-md-3">
                <div>
                    <div className="wd-tuit-text-small">
                        <span className="wd-tuit-text-bold">
                            {tuit.postedBy.username}
                            {tuit.verified && (
                                <i className="fas fa-check-circle ps-1 pe-1"></i>
                            )}
                        </span>
                        <span className="wd-tuit-details">
                            &nbsp; - @{tuit.handle}{" "}
                            <i
                                onClick={() => deleteTuit(tuit)}
                                className="fas fa-trash fa-pull-right text-danger wd-tuit-delete-icon"
                            ></i>
                        </span>
                    </div>
                    {tuit.title && tuit.title !== "" && (
                        <div className="wd-tuit-text-small wd-tuit-text-bold">
                            {tuit.title}
                        </div>
                    )}
                    <div className="mb-2">{tuit.tuit}</div>
                    <div className="wd-tuit-attachments">
                        {tuit.attachments && tuit.attachments.video && (
                            <iframe
                                src={`https://youtube.com/watch?v=${tuit.attachments.video}`}
                                title="Attached video."
                                frameborder="0"
                                className="wd-tuit-attached-video"
                            ></iframe>
                        )}
                        {tuit.attachments && tuit.attachments.image && (
                            // TODO: Why is this able to escape its container?
                            <img
                                src={tuit.attachments.image}
                                alt="Attached with tuit."
                                className="wd-tuit-attached-image"
                            />
                        )}
                    </div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </div>
    );
};

export default TuitListItem;
