<div class="devlog-page-container" style="display: flex; gap: 30px; width: 95%; margin: 0 auto;">
  <!-- Main Content -->
  <div class="devlog-main-content" style="flex: 1;">
    <div class="devlog-header" style="text-align: center; margin: 40px 0;">
      <h1 class="devlog-title" style="font-family: 'Montserrat', sans-serif;">F.a.R. Team Devlog</h1>
      <blockquote class="devlog-quote" style="font-style: italic; color: #666; font-size: 0.9em;">
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
        <div class="devlog-post-card" data-project="{{ post.project | downcase }}" data-tags="{{ post.tags | join: ',' | downcase }}" style="display: flex; margin: 20px 0; {% if imageUrl != "" %}background-image: url('{{ imageUrl | relative_url }}');{% endif %} background-size: cover; background-position: center; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <div class="devlog-post-card-inner" style="padding: 20px; flex: 1; background: rgba(245, 245, 245, 0.9);">
            <h2 style="margin-top: 0;"><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h2>
            <p class="devlog-post-excerpt" style="color: #666;">{{ post.content | strip_html | truncatewords: 50 }}</p>
            <div class="devlog-post-meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
              <div class="devlog-post-meta-left" style="display: flex; align-items: center;">
             <img src="{{ '/assets/images/' | append: post.project | append: '-icon.png' | relative_url }}"
                  alt="{{ post.project }}" 
                  style="height: 24px; margin-right: 10px;">
                <span class="devlog-post-date" style="color: #888; font-size: 0.9em;">{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.tags %}
                  <div class="devlog-post-tags" style="margin-left: 15px;">
                    {% for tag in post.tags %}
                      <span class="devlog-tag-span" style="background: #e0e0e0; padding: 3px 8px; border-radius: 12px; font-size: 0.8em; margin-right: 5px; color: #333;">{{ tag }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
              <a href="{{ post.url | relative_url }}" class="devlog-read-more" style="color: #4CAF50; text-decoration: none;">Read more →</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <button id="toggleSidebarButton" class="devlog-toggle-sidebar-button">Show Filters</button>

  <!-- Sidebar Section -->
  <div class="devlog-sidebar" id="devlogSidebarContent" style="display: flex; flex-direction: column; gap: 20px; width: 300px; flex-shrink: 0;">
      <!-- Project Filter Box -->
      <div class="devlog-filter-box" style="width: 100%; padding: 25px; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: fit-content;">
        <div class="devlog-project-filter-container" style="position: relative; width: 100%;">
          <select id="projectFilter" style="width: 100%; padding: 10px 10px 10px 35px; border: 1px solid #ddd; border-radius: 6px; background: #f8f8f8; cursor: pointer; appearance: none;">
            <option value="all">All Projects</option>
            <option value="farmoxel" data-icon="{{ '/assets/images/farmoxel-icon.png' | relative_url }}">Farmoxel</option>
            <option value="roommakers" data-icon="{{ '/assets/images/roommakers-icon.png' | relative_url }}">Room Makers</option>
            <option value="kta" data-icon="{{ '/assets/images/kta-icon.png' | relative_url }}">KTA</option>
          </select>
          <img id="selectedIcon" src="" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; pointer-events: none;">
        </div>
      </div>
      <!-- Tag Filter Box -->
      <div class="devlog-filter-box" style="width: 100%; padding: 25px; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: fit-content;">
        <select id="tagFilter" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: #f8f8f8; cursor: pointer;">
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
      <div class="devlog-filter-box" style="width: 100%; padding: 25px; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: fit-content;">
        <input type="search" id="searchPosts" placeholder="Search posts..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 20px;">

        <div class="devlog-archives-container" style="height: 300px; overflow-y: auto; width: 100%; overflow-x: hidden;">
          <h3 class="devlog-archives-title" style="font-size: 1.2em; margin-bottom: 15px;">Archives</h3>
          {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
          {% for year in postsByYear %}
            <details style="margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 12px; width: 100%; overflow-x: hidden;">
              <summary style="cursor: pointer; font-weight: 500; color: #444;">{{ year.name }}</summary>
              <ul style="list-style: none; padding-left: 15px; margin-top: 10px; width: 100%; overflow-x: hidden;">
                {% for post in year.items %}
                  <li style="margin-bottom: 8px; white-space: normal; overflow-wrap: break-word;"><a href="{{ post.url | relative_url }}" style="color: #666; text-decoration: none; transition: color 0.2s;">{{ post.title }}</a></li>
                {% endfor %}
              </ul>
            </details>
          {% endfor %}
        </div>
      </div>
  </div>
  
<style>
  .devlog-toggle-sidebar-button {
    display: none;
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1em;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    .devlog-page-container {
      flex-direction: column !important;
      width: 100% !important;
      padding: 15px !important;
      box-sizing: border-box !important;
      gap: 20px !important;
    }
    .devlog-main-content {
      width: 100% !important; 
      flex: none !important;
      order: 1;
    }
    .devlog-toggle-sidebar-button {
      display: block !important; 
      order: 2;
      margin-top: 20px;
    }
    .devlog-sidebar {
      display: none !important; 
      order: 3;
      width: 100% !important;
      margin-top: 0 !important; 
    }
    .devlog-sidebar.sidebar-visible {
      display: flex !important;
    }

    .devlog-header {
      margin: 20px 0 !important;
    }
    .devlog-title {
      font-size: 1.8em !important; 
    }
    .devlog-quote {
      font-size: 0.85em !important;
    }

    .devlog-post-card {
      margin: 15px 0 !important;
    }
    .devlog-post-meta {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 10px !important;
    }
    .devlog-post-meta-left {
       flex-wrap: wrap;
       gap: 8px;
    }
    .devlog-post-tags {
        margin-left: 0 !important;
    }
    .devlog-read-more {
      align-self: flex-start !important;
    }

    .devlog-filter-box {
        padding: 15px !important;
    }
  }

  @media (max-width: 480px) {
    .devlog-page-container {
      padding: 10px !important;
    }
    .devlog-title {
      font-size: 1.5em !important;
    }
    .devlog-post-card-inner {
        padding: 15px !important;
    }
    .devlog-filter-box select,
    .devlog-filter-box input[type="search"] {
        padding: 8px !important;
        font-size: 0.9em !important;
    }
    .devlog-project-filter-container select {
        padding-left: 30px !important;
    }
    .devlog-project-filter-container img#selectedIcon {
        width: 16px !important;
        height: 16px !important;
        left: 8px !important;
    }
  }
</style>

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

          const projectMatch = selectedProject === 'all' || postProject === selectedProject;
          const tagMatch = selectedTag === 'all' || postTags.includes(selectedTag);

          if (!projectMatch || !tagMatch) {
              post.style.display = 'none';
              return;
          }

          if (searchTerm === "") {
              post.style.display = 'flex';
          } else {
              const postUrl = post.querySelector('h2 a').getAttribute('href');
              fetch(postUrl)
                  .then(response => {
                      if (!response.ok) {
                          console.warn(`Failed to fetch ${postUrl} for search: ${response.status}`);
                          return "";
                      }
                      return response.text();
                  })
                  .then(content => {
                      const searchMatch = content.toLowerCase().includes(searchTerm);
                      post.style.display = searchMatch ? 'flex' : 'none';
                  })
                  .catch(error => {
                      console.error(`Error fetching ${postUrl} for search:`, error);
                      post.style.display = 'none';
                  });
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

  // Sidebar toggle functionality
  const toggleButton = document.getElementById('toggleSidebarButton');
  const sidebarContent = document.getElementById('devlogSidebarContent');

  if (toggleButton && sidebarContent) {
    toggleButton.addEventListener('click', function() {
      sidebarContent.classList.toggle('sidebar-visible');
      // Change button text based on sidebar visibility
      if (sidebarContent.classList.contains('sidebar-visible')) {
        toggleButton.textContent = 'Hide Filters';
        toggleButton.style.marginBottom = '15px'; // Keep space when sidebar is shown
      } else {
        toggleButton.textContent = 'Show Filters';
      }
    });
  }
</script>