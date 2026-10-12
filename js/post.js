const postMeta = document.getElementById("post-meta");
const postTitle = document.getElementById("post-title");
const postTags = document.getElementById("post-tags");
const postContent = document.getElementById("post-content");
const postNav = document.getElementById("post-nav");

const slug = new URLSearchParams(window.location.search).get("slug");
const index = posts.findIndex((post) => post.slug === slug);
const post = posts[index];

function postNavLinkHTML(target, label, extraClass) {
    return `
        <a class="card${extraClass}" href="post.html?slug=${target.slug}">
            <small>${label}</small>
            ${target.title}
        </a>
    `;
}

if (post) {
    const older = posts[index + 1];
    const newer = posts[index - 1];

    document.title = `${post.title} | Assi Christ Yapi`;

    postMeta.innerHTML = `
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <span>·</span>
        <span>${readingTime(post.body)} min read</span>
    `;
    postTitle.textContent = post.title;
    postTags.innerHTML = tagsHTML(post.tags);
    postContent.innerHTML = post.body;

    postNav.innerHTML =
        (older ? postNavLinkHTML(older, "← Previous", "") : "<span></span>") +
        (newer ? postNavLinkHTML(newer, "Next →", " right") : "");
} else {
    postContent.innerHTML = `<p>This post doesn't exist or has been moved. <a href="blog.html">Browse all posts</a>.</p>`;
}
