const skillsList = document.getElementById("skills-list");
const projectsGrid = document.getElementById("projects-grid");
const latestPosts = document.getElementById("latest-posts");

function skillGroupHTML(group) {
    return `
        <div class="card skill-group">
            <h3>${group.title}</h3>
            <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
    `;
}

function projectLinksHTML(project) {
    let links = "";

    if (project.repo) {
        links += `<a href="${project.repo}" target="_blank" rel="noopener noreferrer">Code</a>`;
    }

    if (project.live) {
        links += `<a href="${project.live}" target="_blank" rel="noopener noreferrer">Live</a>`;
    }

    return links;
}

function projectCardHTML(project) {
    return `
        <article class="card project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML(project.tags)}</div>
            <div class="project-links">${projectLinksHTML(project)}</div>
        </article>
    `;
}

skillsList.innerHTML = skills.map(skillGroupHTML).join("");
projectsGrid.innerHTML = projects.map(projectCardHTML).join("");
latestPosts.innerHTML = posts.slice(0, 3).map(postCardHTML).join("");
