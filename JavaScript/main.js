const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation toggle
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open");
  });
}

// Footer year auto-update
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Helper: tech tag
function createTag(text) {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = text;
  return span;
}

// Project card renderer
function projectCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "card-img";
  img.src = project.image?.startsWith("..")
    ? project.image.replace("..", ".")
    : project.image;
  img.alt = project.title;

  const body = document.createElement("div");
  body.className = "card-body";

  const h3 = document.createElement("h3");
  h3.textContent = project.title;

  const p = document.createElement("p");
  p.className = "muted";
  p.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "tags";
  (project.tech || []).slice(0, 6).forEach(t => tags.appendChild(createTag(t)));

  const links = document.createElement("div");
  links.className = "card-links";

  if (project.links?.github) {
    const a = document.createElement("a");
    a.className = "text-link";
    a.href = project.links.github;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = "GitHub ↗";
    links.appendChild(a);
  }

  if (project.links?.live) {
    const a = document.createElement("a");
    a.className = "text-link";
    a.href = project.links.live;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = "Live ↗";
    links.appendChild(a);
  }

  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(tags);
  body.appendChild(links);

  card.appendChild(img);
  card.appendChild(body);
  return card;
}

// Experience timeline renderer
function timelineItem(item) {
  const li = document.createElement("li");
  li.className = "timeline-item";

  const title = document.createElement("div");
  title.className = "timeline-title";
  title.innerHTML = `<strong>${item.role}</strong> • ${item.org}`;

  const meta = document.createElement("div");
  meta.className = "timeline-meta muted";
  meta.textContent = item.period;

  const ul = document.createElement("ul");
  ul.className = "timeline-bullets";

  (item.bullets || []).forEach(b => {
    const bullet = document.createElement("li");
    bullet.textContent = b;
    ul.appendChild(bullet);
  });

  li.appendChild(title);
  li.appendChild(meta);
  li.appendChild(ul);
  return li;
}

// Render featured projects on homepage
const featured = document.getElementById("featuredProjects");
if (featured && typeof PROJECTS !== "undefined") {
  PROJECTS.slice(0, 3).forEach(p => featured.appendChild(projectCard(p)));
}

// Render experience preview on homepage
const timeline = document.getElementById("experienceTimeline");
if (timeline && typeof EXPERIENCE !== "undefined") {
  EXPERIENCE.slice(0, 3).forEach(e => timeline.appendChild(timelineItem(e)));
}
