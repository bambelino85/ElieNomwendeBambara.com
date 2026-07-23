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
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Helper: tech tag
function createTag(text) {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = text;
  return span;
}

// --- Modal helpers (Projects page) ---
function getModalEls() {
  return {
    backdrop: document.getElementById("projectModalBackdrop"),
    title: document.getElementById("modalTitle"),
    img: document.getElementById("modalImg"),
    desc: document.getElementById("modalDesc"),
    tags: document.getElementById("modalTags"),
    actions: document.getElementById("modalActions"),
    closeBtn: document.getElementById("modalCloseBtn")
  };
}

function openProjectModal(project) {
  const m = getModalEls();
  if (!m.backdrop) return;

  m.title.textContent = project.title;
  m.desc.textContent = project.description || "";

  // Image
  m.img.src = project.image;
  m.img.alt = project.title;
  m.img.loading = "eager";
  m.img.decoding = "async";

  // Tags
  m.tags.innerHTML = "";
  (project.tech || []).forEach(t => m.tags.appendChild(createTag(t)));

  // Actions
  m.actions.innerHTML = "";
  if (project.links?.github) {
    const a = document.createElement("a");
    a.className = "btn primary";
    a.href = project.links.github;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = "View on GitHub ↗";
    m.actions.appendChild(a);
  }
  if (project.links?.live) {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = project.links.live;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = "Live Demo ↗";
    m.actions.appendChild(a);
  }

  // Open
  m.backdrop.classList.add("open");
  m.backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const m = getModalEls();
  if (!m.backdrop) return;
  m.backdrop.classList.remove("open");
  m.backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

(function wireModalClose() {
  const m = getModalEls();
  if (!m.backdrop) return;

  m.closeBtn?.addEventListener("click", closeProjectModal);
  m.backdrop.addEventListener("click", (e) => {
    if (e.target === m.backdrop) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
})();

// Identify category for filters (AWS / C++ / Python)
function projectCategory(project) {
  return project.category || "Other";
}

// Project card renderer (with overlay buttons)
function projectCard(project, options = {}) {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;

  const img = document.createElement("img");
  img.className = "card-img";
  img.src = project.image;img.alt = project.title;

  // Lazy loading + decode optimization
  img.loading = options.eager ? "eager" : "lazy";
  img.decoding = "async";

  const body = document.createElement("div");
  body.className = "card-body";

  const h3 = document.createElement("h3");
  h3.textContent = project.title;

  const p = document.createElement("p");
  p.className = "muted";
  p.textContent = project.description || "";

  const tags = document.createElement("div");
  tags.className = "tags";
  (project.tech || []).slice(0, 6).forEach(t => tags.appendChild(createTag(t)));

  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(tags);

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "card-overlay";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "overlay-btn";
  detailsBtn.type = "button";
  detailsBtn.textContent = "Details";

  detailsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openProjectModal(project);
  });

  overlay.appendChild(detailsBtn);

  if (project.links?.github) {
    const gh = document.createElement("a");
    gh.className = "overlay-btn primary";
    gh.href = project.links.github;
    gh.target = "_blank";
    gh.rel = "noreferrer";
    gh.textContent = "View on GitHub ↗";
    gh.addEventListener("click", (e) => e.stopPropagation());
    overlay.appendChild(gh);
  }

  card.appendChild(img);
  card.appendChild(body);
  card.appendChild(overlay);

  // Card click opens modal (nice UX)
  card.addEventListener("click", () => openProjectModal(project));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openProjectModal(project);
  });

  // Store category for filters
  card.dataset.category = projectCategory(project);

  return card;
}

// Render all projects on homepage
const homeProjects = document.getElementById("homeProjects");
if (homeProjects && typeof PROJECTS !== "undefined") {
  PROJECTS.forEach((p, idx) => homeProjects.appendChild(projectCard(p, { eager: idx === 0 })));
}

// Render experience preview on homepage
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

const timeline = document.getElementById("experienceTimeline");
if (timeline && typeof EXPERIENCE !== "undefined") {
  EXPERIENCE.slice(0, 3).forEach(e => timeline.appendChild(timelineItem(e)));
}

// Projects page: render all + filter
(function initProjectsPage() {
  const all = document.getElementById("allProjects");
  const filterWrap = document.getElementById("projectFilters");
  if (!all || typeof PROJECTS === "undefined") return;

  function render(category) {
    all.innerHTML = "";
    PROJECTS.forEach((p, idx) => {
      const card = projectCard(p, { eager: idx === 0 });
      if (category && category !== "All" && card.dataset.category !== category) return;
      all.appendChild(card);
    });
  }

  function setActive(btn) {
    [...filterWrap.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // Build filters (fixed set + Other if needed)
  if (filterWrap) {
    const cats = new Set(PROJECTS.map(projectCategory));
    const order = ["All", "Database Management", "Data Structures", "Operating Systems", "Cloud / AWS", "Cloud / Security", ...(cats.has("Other") ? ["Other"] : [])];

    order.forEach(cat => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-chip" + (cat === "All" ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        setActive(btn);
        render(cat);
      });
      filterWrap.appendChild(btn);
    });
  }

  render("All");
})();

// --- Updates & Accomplishments feed (LinkedIn-style posts) ---
function postCard(post) {
  const article = document.createElement("article");
  article.className = "post-card";

  const header = document.createElement("div");
  header.className = "post-card-header";
  header.innerHTML = `
    <img class="post-avatar" src="../Images/profile/headshot1.jpg" alt="Elie Nomwende Bambara">
    <div>
      <div class="post-author">Elie Nomwende Bambara</div>
      <div class="post-meta">${post.category ? post.category + " • " : ""}${post.date || ""}</div>
    </div>
  `;
  article.appendChild(header);

  if (post.image) {
    const img = document.createElement("img");
    img.className = "post-image";
    img.src = post.image;
    img.alt = post.title || "Post image";
    img.loading = "lazy";
    img.decoding = "async";
    article.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "post-body";

  if (post.title) {
    const h3 = document.createElement("h3");
    h3.className = "h3";
    h3.textContent = post.title;
    body.appendChild(h3);
  }

  if (post.caption) {
    const p = document.createElement("p");
    p.className = "post-caption";
    p.textContent = post.caption;
    body.appendChild(p);
  }

  if ((post.tags || []).length) {
    const tagsWrap = document.createElement("div");
    tagsWrap.className = "tags";
    post.tags.forEach(t => tagsWrap.appendChild(createTag(t)));
    body.appendChild(tagsWrap);
  }

  article.appendChild(body);

  if (post.linkedinUrl) {
    const actions = document.createElement("div");
    actions.className = "post-actions";
    const a = document.createElement("a");
    a.className = "text-link";
    a.href = post.linkedinUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.innerHTML = `<i class="fa-brands fa-linkedin"></i> View on LinkedIn`;
    actions.appendChild(a);
    article.appendChild(actions);
  }

  return article;
}

const postsFeed = document.getElementById("postsFeed");
if (postsFeed && typeof POSTS !== "undefined") {
  POSTS.forEach(p => postsFeed.appendChild(postCard(p)));
}

// Homepage Quick Highlights -> open project modal
document.querySelectorAll(".highlight-link").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const title = btn.dataset.project;
    const project = (typeof PROJECTS !== "undefined")
      ? PROJECTS.find(p => p.title === title)
      : null;

    if (project) openProjectModal(project);
  });
});


