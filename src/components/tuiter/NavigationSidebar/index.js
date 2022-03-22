import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <div className="list-group">
                <div className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </div>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "home" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-home"></i>&nbsp;
                    <span className="d-none d-xl-inline">Home</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "explore" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-hashtag"></i>&nbsp;
                    <span className="d-none d-xl-inline">Explore</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "notifications" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-bell"></i>&nbsp;
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "Messages" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-envelope"></i>&nbsp;
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "Bookmarks" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-bookmark"></i>&nbsp;
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "lists" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-list"></i>&nbsp;
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "profile" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fa fa-user"></i>&nbsp;
                    <span className="d-none d-xl-inline">Profile</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action ${
                        active === "more" ? "active" : ""
                    }
                    }`}
                    href="#"
                >
                    <i className="fas fa-ellipsis-h"></i>&nbsp;
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a
                    href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill"
                >
                    Tweet
                </a>
            </div>
        </div>
    );
};
export default NavigationSidebar;
