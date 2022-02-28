import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return `
            <div class="d-flex justify-content-between">
            <div class="input-group wd-tuiter-search-container">
                <span
                    class="input-group-text bg-white text-dark wd-search-add-on"
                >
                    <i class="fas fa-search"></i>
                </span>
                <input
                    type="text"
                    name="tuiter-search-bar"
                    id="tuiter-search-bar"
                    class="wd-tuiter-search-bar form-control border-start-0"
                    placeholder="Search Twitter"
                />
            </div>
            <div>
                <a
                    href="settings.html"
                    class="wd-tuiter-settings-button"
                >
                    <i
                        class="fas fa-cog fa-2x text-primary wd-tuiter-settings-icon"
                    ></i>
                </a>
            </div>
            </div>
            <div class="mt-2 mb-2">
                <ul class="nav nav-tabs wd-explore-main-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">For You</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">News</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a href="#" class="nav-link">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="wd-explore-main-content-highlighted-tuit">
                <img
                    src="../assets/starship.jpg"
                    alt="SpaceX's starship spacecraft."
                    class="wd-explore-main-content-image"
                />
                <h3
                    class="wd-explore-main-content-image-text-overlay"
                >
                    SpaceX's Starship
                </h3>
            </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
