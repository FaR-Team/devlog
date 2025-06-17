<div class="devlog-page-container">
  <!-- Main Content -->
  <div class="devlog-main-content">
    <div class="devlog-header">
      <h1 class="devlog-title">F.a.R. Team Devlog</h1>
      <blockquote class="devlog-quote">
        "Dive into the F.a.R. Team Devlog! From dev updates to creative insights, we share everything that goes into crafting our unique gaming experiences."
      </blockquote>
    </div>

    <div id="postsContainer">
      {% for post in site.posts %}
        {% assign imageUrl = "" %}
        {% if post.content contains "![" %}
          {% assign images = post.content | split: "![" %}
          {% if images.size > 1 %}
            {% assign firstImagePart = images[1] | split: ")" | first %}
            {% if firstImagePart contains "](" %}
              {% assign imageUrl = firstImagePart | split: "](" | last %}
            {% endif %}
          {% endif %}
        {% endif %}
        <div class="devlog-post-card" data-project="{{ post.project | downcase }}" data-tags="{{ post.tags | join: ',' | downcase }}" {% if imageUrl != "" %}style="background-image: url('{{ imageUrl | relative_url }}');"{% endif %}>
          <div class="devlog-post-card-inner">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p class="devlog-post-excerpt">{{ post.content | strip_html | truncatewords: 50 }}</p>
            <div class="devlog-post-meta">
              <div class="devlog-post-meta-left">
             <img src="{{ '/assets/images/' | append: post.project | append: '-icon.png' | relative_url }}"
                  alt="{{ post.project }}" class="devlog-project-icon">
                <span class="devlog-post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.tags %}
                  <div class="devlog-post-tags">
                    {% for tag in post.tags %}
                      <span class="devlog-tag-span">{{ tag }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
              <a href="{{ post.url | relative_url }}" class="devlog-read-more">Read more →</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <button id="toggleSidebarButton" class="devlog-toggle-sidebar-button" aria-controls="devlogSidebarContent" aria-expanded="false">Show Filters</button>

  <!-- Sidebar Section -->
  <div class="devlog-sidebar" id="devlogSidebarContent">
      <!-- Project Filter Box -->
      <div class="devlog-filter-box">
        <div class="devlog-project-filter-container">
          <select id="projectFilter">
            <option value="all">All Projects</option>
            <option value="farmoxel" data-icon="{{ '/assets/images/farmoxel-icon.png' | relative_url }}">Farmoxel</option>
            <option value="roommakers" data-icon="{{ '/assets/images/roommakers-icon.png' | relative_url }}">Room Makers</option>
            <option value="kta" data-icon="{{ '/assets/images/kta-icon.png' | relative_url }}">KTA</option>
          </select>
          <img id="selectedIcon" src="" alt="Selected project icon">
        </div>
      </div>
      <!-- Tag Filter Box -->
      <div class="devlog-filter-box">
        <select id="tagFilter">
          <option value="all">All Tags</option>
          {% assign site_tags = "" %}
          {% for post in site.posts %}
            {% for tag in post.tags %}
              {% unless site_tags contains tag %}
                {% capture site_tags %}{{ site_tags }}{{ tag }},{% endcapture %}
              {% endunless %}
            {% endfor %}
          {% endfor %}
          {% assign sorted_tags = site_tags | split: "," | uniq | sort %}
          {% for tag_name in sorted_tags %}
            {% if tag_name != "" %}
             <option value="{{ tag_name | downcase }}">{{ tag_name }}</option>
            {% endif %}
          {% endfor %}
        </select>
      </div>
      <!-- Search and Archives Box -->
      <div class="devlog-filter-box">
        <input type="search" id="searchPosts" placeholder="Search posts...">

        <div class="devlog-archives-container">
          <h3 class="devlog-archives-title">Archives</h3>
          {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
          {% for year in postsByYear %}
            <details>
              <summary>{{ year.name }}</summary>
              <ul>
                {% for post in year.items %}
                  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
                {% endfor %}
              </ul>
            </details>
          {% endfor %}
        </div>
      </div>
  </div>
  
</div>
<div id="sidebarScrim" class="devlog-sidebar-scrim"></div>

<script>
  document.getElementById('projectFilter').addEventListener('change', filterPosts);
  document.getElementById('tagFilter').addEventListener('change', filterPosts);
  document.getElementById('searchPosts').addEventListener('input', filterPosts);

  function filterPosts() {
      const selectedProject = document.getElementById('projectFilter').value.toLowerCase();
      const selectedTag = document.getElementById('tagFilter').value.toLowerCase();
      const searchTerm = document.getElementById('searchPosts').value.toLowerCase();
      const posts = document.querySelectorAll('#postsContainer > div');

      posts.forEach(post => {
          const postProject = post.dataset.project || 'all';
          const postTags = (post.dataset.tags || '').split(',');
          const postTitle = post.querySelector('h2 a').textContent.toLowerCase();
          const postExcerpt = post.querySelector('.devlog-post-excerpt').textContent.toLowerCase();

          const projectMatch = selectedProject === 'all' || postProject === selectedProject;
          const tagMatch = selectedTag === 'all' || postTags.includes(selectedTag);

          // Combine title, excerpt, and tags for searching
          const contentToSearch = `${postTitle} ${postExcerpt} ${postTags.join(' ')}`;
          const searchMatch = searchTerm === "" || contentToSearch.includes(searchTerm);

          if (projectMatch && tagMatch && searchMatch) {
              post.style.display = 'flex';
          } else {
              post.style.display = 'none';
          }
      });
  }

  const select = document.getElementById('projectFilter');
  const icon = document.getElementById('selectedIcon');

  select.addEventListener('change', function() {
    const selected = select.options[select.selectedIndex];
    icon.src = selected.dataset.icon || '';
    icon.style.display = selected.dataset.icon ? 'block' : 'none';
  });

  select.dispatchEvent(new Event('change'));

  const toggleButton = document.getElementById('toggleSidebarButton');
  const sidebarContent = document.getElementById('devlogSidebarContent');
  const sidebarScrim = document.getElementById('sidebarScrim');
  const body = document.body;

  if (toggleButton && sidebarContent) {
    sidebarContent.setAttribute('aria-hidden', 'true');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Initial icon

    function openSidebar() {
      sidebarContent.classList.add('sidebar-visible');
      sidebarContent.setAttribute('aria-hidden', 'false');
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Icon when sidebar is open
      
      requestAnimationFrame(() => {
        const sidebarActualWidth = sidebarContent.offsetWidth;
        toggleButton.style.right = `${sidebarActualWidth}px`;
      });
      
      if (sidebarScrim) sidebarScrim.classList.add('visible'); // Ensure scrim is managed
      body.classList.add('devlog-sidebar-open-no-scroll');
    }

    function closeSidebar() {
      sidebarContent.classList.remove('sidebar-visible');
      sidebarContent.setAttribute('aria-hidden', 'true');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Icon when sidebar is closed
      toggleButton.style.right = '0px';

      if (sidebarScrim) sidebarScrim.classList.remove('visible');
      body.classList.remove('devlog-sidebar-open-no-scroll');
    }

    toggleButton.addEventListener('click', function(event) {
      event.stopPropagation();
      sidebarContent.classList.toggle('sidebar-visible');
      if (sidebarContent.classList.contains('sidebar-visible')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });

    if (sidebarScrim) {
      sidebarScrim.addEventListener('click', function() {
        if (sidebarContent.classList.contains('sidebar-visible')) {
          closeSidebar();
        }
      });
    }
  }
</script>
