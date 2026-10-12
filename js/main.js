const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

function formatDate(isoDate) {
    const date = new Date(isoDate + "T00:00:00");
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function readingTime(html) {
    const text = html.replace(/<[^>]*>/g, " ");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 220));
}

function tagsHTML(tags) {
    return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function postCardHTML(post) {
    return `
        <a class="card post-card" href="post.html?slug=${post.slug}">
            <div class="meta">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
                <span>·</span>
                <span>${readingTime(post.body)} min read</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <div class="tags">${tagsHTML(post.tags)}</div>
        </a>
    `;
}
