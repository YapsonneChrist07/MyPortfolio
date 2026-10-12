const skills = [
    { title: "Frontend", items: ["HTML & CSS", "JavaScript", "React", "Vite"] },
    { title: "Backend", items: ["Node.js", "Express", "PHP", "Java", "Python"] },
    { title: "Data", items: ["PostgreSQL", "MySQL", "SQL", "Sequelize ORM"] },
    { title: "Testing & Tools", items: ["Selenium", "Robot Framework", "Git & GitHub", "Excel & PowerPoint"] },
];

const projects = [
    {
        title: "SBO: E-commerce Platform (Capstone)",
        description: "Full stack marketplace for African products (wax fabrics, jewelry, art, home decor). Customers browse, filter and review products, manage a cart and wishlist, check out with card or mobile money, and find nearby stores via Google Places. An admin dashboard covers orders, products, inventory with low-stock alerts, promotions and customers. The REST API has 25+ resources with JWT auth and input validation.",
        tags: ["React", "Node.js", "Express", "MySQL", "JWT", "Google Places API"],
        repo: "https://github.com/YapsonneChrist07/SBO",
        live: "",
    },
    {
        title: "Slotify: Music Streaming App",
        description: "A Spotify-style web player built with PHP and MySQL. Users register and log in, browse albums and artists, search songs, create playlists, and play music from a persistent now-playing bar that tracks play counts. Pages load via AJAX so playback never stops.",
        tags: ["PHP", "MySQL", "JavaScript", "AJAX", "OOP"],
        repo: "https://github.com/YapsonneChrist07/Slotify",
        live: "",
    },
    {
        title: "Leno: App Landing Page",
        description: "A responsive marketing site for a health and productivity app, with feature highlights, testimonials, a preview section, a details page and app store download links.",
        tags: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/YapsonneChrist07/Leno-Website",
        live: "",
    },
    {
        title: "Tutor: Online Course Website",
        description: "A sales site for a video-creation course, with chapters, summary, key takeaways, an author section and a contact page, plus custom SVG section dividers.",
        tags: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/YapsonneChrist07/Tutor-website",
        live: "",
    },
    {
        title: "Lumina Creative: Agency Website",
        description: "A multi-page website for a creative agency, with an image grid portfolio, Lightbox gallery, and About and Contact pages.",
        tags: ["HTML", "CSS", "Lightbox2"],
        repo: "https://github.com/YapsonneChrist07/-lumina-creative-grid",
        live: "",
    },
    {
        title: "This Portfolio",
        description: "Hand-written HTML, CSS and vanilla JavaScript, no framework and no build step. Blog posts live in a JavaScript data file, and the site is hosted on GitHub Pages.",
        tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
        repo: "https://github.com/YapsonneChrist07/online-portfolio",
        live: "https://yapsonnechrist07.github.io/online-portfolio/",
    },
];

const posts = [
    {
        slug: "shipping-my-portfolio",
        title: "Shipping My Portfolio to GitHub Pages",
        date: "2026-09-28",
        summary: "How I built this site with React + Vite, wrote posts in Markdown, and deployed it automatically with GitHub Actions.",
        tags: ["react", "deployment", "github"],
        body: `
            <p>This site started as a React app built with Vite. Every blog post was a Markdown file in <code>src/posts/</code>.</p>

            <h2>How the blog works</h2>
            <p>At build time, Vite's <code>import.meta.glob</code> loads every <code>.md</code> file. I parse the frontmatter (title, date, tags) and convert the body to HTML with <code>marked</code>. No database, no CMS, just files in Git.</p>
            <p>To create a new post, I run:</p>
            <pre><code>npm run new-post "My new post title"</code></pre>

            <h2>Deploying</h2>
            <p>A GitHub Actions workflow builds the site and publishes it to GitHub Pages on every push to <code>main</code>. I use a <code>HashRouter</code>, so deep links like <code>/#/blog/some-post</code> work without any server configuration.</p>

            <h2>Lessons</h2>
            <ul>
                <li>Static sites are fast and free to host</li>
                <li>Automating deployment removes the fear of shipping</li>
                <li>Writing about what you learn makes it stick</li>
            </ul>
        `,
    },
    {
        slug: "postgres-and-node",
        title: "Connecting Node.js to PostgreSQL for the First Time",
        date: "2026-09-08",
        summary: "Setting up pg and Sequelize, keeping secrets in .env, and the first query that actually returned rows.",
        tags: ["nodejs", "postgresql", "backend"],
        body: `
            <p>This week I connected a Node.js app to a real PostgreSQL database. Here's what I learned.</p>

            <h2>Keep credentials out of your code</h2>
            <p>The first lesson: never hard-code database passwords. I moved everything into a <code>.env</code> file and loaded it with <code>dotenv</code>:</p>
            <pre><code>require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});</code></pre>
            <p>And I added <code>.env</code> to <code>.gitignore</code> <strong>before</strong> my first commit.</p>

            <h2>Models and controllers</h2>
            <p>Splitting code into <code>models/</code> and <code>controllers/</code> felt like overkill at first, but it paid off quickly. Models describe the data; controllers decide what to do with it.</p>
            <pre><code>SELECT id, name, email
FROM users
ORDER BY created_at DESC
LIMIT 10;</code></pre>

            <h2>What tripped me up</h2>
            <ul>
                <li>Forgetting that <code>await</code> needs an <code>async</code> function</li>
                <li>Mixing up <code>findOne</code> and <code>findByPk</code></li>
                <li>Not closing the connection in CLI scripts, so the process never exited</li>
            </ul>
            <p>Next up: authentication.</p>
        `,
    },
    {
        slug: "why-i-started-full-stack",
        title: "Why I Started Learning Full Stack Development",
        date: "2026-08-25",
        summary: "The moment I decided to stop only consuming the web and start building it, and the roadmap I picked.",
        tags: ["journey", "career"],
        body: `
            <p>Every developer's story starts somewhere. Mine started with a simple question: <em>how does the data I type into a form end up in a database, and come back to me on another page?</em></p>

            <h2>The roadmap I chose</h2>
            <p>I decided to learn the whole path a request travels:</p>
            <ol>
                <li><strong>Frontend</strong>: HTML, CSS, JavaScript, then React</li>
                <li><strong>Backend</strong>: Node.js and Express</li>
                <li><strong>Database</strong>: PostgreSQL and SQL</li>
                <li><strong>Shipping</strong>: Git, GitHub, and deployment</li>
            </ol>
            <blockquote>
                <p>The goal isn't to master everything at once. It's to understand enough of each layer to build something end to end.</p>
            </blockquote>

            <h2>What I'll write about here</h2>
            <p>This blog is my learning journal. Expect posts about bugs I fought, concepts that finally clicked, and small projects I shipped along the way.</p>
        `,
    },
];
