<div class="devlog-container">
  <!-- Main Content -->
  <div class="main-content-area">
    <div class="devlog-header">
      <h1>F.a.R. Team Devlog</h1>
      <blockquote>
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
        <div class="post-card" data-project="{{ post.project | downcase }}" data-tags="{{ post.tags | join: ',' | downcase }}" {% if imageUrl != "" %}style="background-image: url('{{ imageUrl | relative_url }}');"{% endif %}>
          <div class="post-card-inner-content">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p class="post-excerpt">{{ post.content | strip_html | truncatewords: 50 }}</p>
            <div class="post-card-meta">
              <div class="post-card-meta-left">
             <img src="{{ '/assets/images/' | append: post.project | append: '-icon.png' | relative_url }}"
                  alt="{{ post.project }}" 
                  class="project-icon">
                <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.tags %}
                  <div class="post-card-tags">
                    {% for tag in post.tags %}
                      <span class="tag">{{ tag }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
              <a href="{{ post.url | relative_url }}" class="read-more-link">Read more →</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <!-- Sidebar Section -->
  <div class="sidebar-area">
      <!-- Project Filter Box -->
      <div class="filter-box">
        <div class="project-filter-container">
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
      <div class="filter-box">
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
      <div class="filter-box">
        <input type="search" id="searchPosts" placeholder="Search posts...">
        <div class="archives-container">
          <h3>Archives</h3>
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

<style>
  /* Base Styles */
  .devlog-container {
    display: grid;                     /* CHANGED to Grid */
    grid-template-columns: 1fr 300px;  /* Main content takes available space, sidebar is 300px */
    gap: 30px;
    width: 95%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .main-content-area {
    /* flex: 1; REMOVED - Grid handles sizing */
    min-width: 0; /* Still good for content within this area */
  }

  .devlog-header {
    text-align: center;
    margin: 40px 0;
  }
  .devlog-header h1 {
    font-family: 'Montserrat', sans-serif;
  }
  .devlog-header blockquote {
    font-style: italic;
    color: #666; 
    font-size: 0.9em;
  }

  .sidebar-area {
    display: flex; /* This is for the sidebar's internal items (filter boxes) */
    flex-direction: column;
    gap: 20px;
    /* width: 300px; REMOVED - Handled by grid-template-columns on parent */
    /* flex-shrink: 0; REMOVED - Not needed for grid item */
  }

  .post-card {
    display: flex; 
    margin: 20px 0;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .post-card-inner-content {
    padding: 20px;
    flex: 1; 
    background: rgba(245, 245, 245, 0.9); 
  }

  .post-card-inner-content h2 {
    margin-top: 0;
  }
  .post-card-inner-content h2 a {
    text-decoration: none;
    color: #333; 
  }
  .post-card-inner-content .post-excerpt { 
    color: #666; 
  }
  .post-card-meta { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .post-card-meta-left { 
    display: flex;
    align-items: center;
  }
  .post-card-meta-left .project-icon {
    height: 24px;
    margin-right: 10px;
  }
  .post-card-meta-left .post-date { 
    color: #888; 
    font-size: 0.9em;
  }
  .post-card-tags { 
    margin-left: 15px;
  }
  .post-card-tags .tag { 
    background: #e0e0e0; 
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    margin-right: 5px;
    color: #333; 
  }
  .post-card .read-more-link { 
    color: #4CAF50; 
    text-decoration: none;
  }

  /* Sidebar boxes */
  .filter-box {
    width: 100%;
    padding: 25px;
    background: #ffffff; 
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    height: fit-content;
    box-sizing: border-box; 
  }
  .filter-box select, .filter-box input[type="search"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd; 
    border-radius: 6px;
    background: #f8f8f8; 
    box-sizing: border-box;
    cursor: pointer;
  }
  .filter-box input[type="search"] {
    margin-bottom: 20px;
  }
  .project-filter-container { 
    position: relative;
    width: 100%;
  }
  .project-filter-container select {
    padding-left: 35px; 
    appearance: none; 
  }
  .project-filter-container #selectedIcon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
  }
  .archives-container { 
    height: 300px;
    overflow-y: auto;
    width: 100%;
    overflow-x: hidden; 
  }
  .archives-container h3 {
    font-size: 1.2em;
    margin-bottom: 15px;
  }
  .archives-container details {
    margin-bottom: 12px;
    border-bottom: 1px solid #eee; 
    padding-bottom: 12px;
    width: 100%; 
    overflow-x: hidden; 
  }
  .archives-container summary {
    cursor: pointer;
    font-weight: 500;
    color: #444; 
  }
  .archives-container ul {
    list-style: none;
    padding-left: 15px;
    margin-top: 10px;
    width: 100%; 
    overflow-x: hidden; 
  }
  .archives-container li {
    margin-bottom: 8px;
    white-space: normal; 
    overflow-wrap: break-word; 
  }
  .archives-container li a {
    color: #666; 
    text-decoration: none;
    transition: color 0.2s;
  }
  .archives-container li a:hover {
    color: #333; 
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .devlog-container {
      grid-template-columns: 1fr; /* Single column for mobile */
      gap: 20px; 
      width: 100%; 
      padding: 10px; 
    }

    .sidebar-area {
      display: none; /* Hide sidebar on mobile */
    }

    .main-content-area {
      /* order: 1; No longer needed as sidebar is hidden */
    }
    
    .post-card {
      margin: 15px 0; 
    }

    .devlog-header {
      margin: 20px 0;
    }
    .devlog-header h1 {
      font-size: 1.8em; 
    }
    .devlog-header blockquote {
      font-size: 0.85em;
    }

    .filter-box {
      padding: 15px;
    }
    
    .post-card-inner-content {
      padding: 15px;
    }

    .post-card-meta {
      flex-direction: column;
      align-items: flex-start; 
      gap: 10px; 
    }
    .post-card .read-more-link {
      align-self: flex-start; 
    }
  }

  @media (max-width: 480px) {
      .post-card-inner-content h2 {
          font-size: 1.2em; 
      }
      .post-card-inner-content .post-excerpt {
          font-size: 0.9em;
      }
      .post-card-tags .tag {
          font-size: 0.7em;
          padding: 2px 6px;
      }
      .filter-box {
        padding: 10px;
      }
      .filter-box select, .filter-box input[type="search"] {
        padding: 8px;
        font-size: 0.9em;
      }
      .project-filter-container select {
        padding-left: 30px; 
      }
      .project-filter-container #selectedIcon {
        width: 16px;
        height: 16px;
        left: 8px;
      }
      .devlog-header h1 {
        font-size: 1.5em; 
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
</script>