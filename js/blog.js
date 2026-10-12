const searchInput = document.getElementById("blog-search");
const tagFilters = document.getElementById("tag-filters");
const postsList = document.getElementById("posts-list");
const noResults = document.getElementById("no-results");

const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort();

let activeTag = "all";

function renderTagFilters() {
    tagFilters.innerHTML = ["all", ...allTags]
        .map((tag) => {
            const activeClass = tag === activeTag ? " active" : "";
            return `<button type="button" class="tag tag-btn${activeClass}" data-tag="${tag}">${tag}</button>`;
        })
        .join("");
}

function renderPosts() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = posts.filter((post) => {
        const matchesTag = activeTag === "all" || post.tags.includes(activeTag);
        const searchable = `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLowerCase();
        return matchesTag && searchable.includes(query);
    });

    postsList.innerHTML = filtered.map(postCardHTML).join("");
    noResults.hidden = filtered.length > 0;
}

searchInput.addEventListener("input", renderPosts);

tagFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".tag-btn");

    if (!button) {
        return;
    }

    activeTag = button.dataset.tag;
    renderTagFilters();
    renderPosts();
});

renderTagFilters();
renderPosts();
