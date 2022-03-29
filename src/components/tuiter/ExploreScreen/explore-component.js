import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = ({ active = "for you" }) => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="input-group wd-tuiter-search-container">
                    <span className="input-group-text bg-white text-dark wd-search-add-on">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        type="text"
                        name="tuiter-search-bar"
                        id="tuiter-search-bar"
                        className="wd-tuiter-search-bar form-control border-start-0"
                        placeholder="Search Twitter"
                    />
                </div>
                <div>
                    <a
                        href="settings.html"
                        className="wd-tuiter-settings-button"
                    >
                        <i className="fas fa-cog fa-2x text-primary wd-tuiter-settings-icon"></i>
                    </a>
                </div>
            </div>
            <div className="mt-2 mb-2">
                <ul className="nav nav-tabs wd-explore-main-nav">
                    <li className="nav-item">
                        <a
                            href="#"
                            className={`nav-link ${
                                active === "for you" && "active"
                            }`}
                        >
                            For You
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className={`nav-link ${
                                active === "trending" && "active"
                            }`}
                        >
                            Trending
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className={`nav-link ${
                                active === "news" && "active"
                            }`}
                        >
                            News
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className={`nav-link ${
                                active === "sports" && "active"
                            }`}
                        >
                            Sports
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a
                            href="#"
                            className={`nav-link ${
                                active === "entertainment" && "active"
                            }`}
                        >
                            Entertainment
                        </a>
                    </li>
                </ul>
            </div>
            <div className="wd-explore-main-content-highlighted-tuit">
                <img
                    src="/tuiter/assets/starship.jpg"
                    alt="SpaceX's starship spacecraft."
                    className="wd-explore-main-content-image"
                />
                <h3 className="wd-explore-main-content-image-text-overlay">
                    SpaceX's Starship
                </h3>
            </div>
            <PostSummaryList />
        </div>
    );
};
export default ExploreComponent;
