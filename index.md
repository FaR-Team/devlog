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
        {% assign isLatest = false %}
        {% if forloop.first %}
          {% assign isLatest = true %}
        {% endif %}

        {% assign imageUrl = post.image %}
        {% if imageUrl == nil or imageUrl == "" %}
          {% if post.content contains "![" %}
            {% assign postImages = post.content | split: "![" %}
            {% for img in postImages offset:1 %}
              {% if img contains "](" %}
                {% assign parts = img | split: ")" | first | split: "](" %}
                {% if parts.size > 1 %}
                  {% assign imageUrl = parts[1] | strip %}
                  {% break %}
                {% endif %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endif %}

        {% if imageUrl == nil or imageUrl == "" %}
          {% if post.content contains "<img" %}
            {% assign postHtmlImages = post.content | split: "<img" %}
            {% for img in postHtmlImages offset:1 %}
              {% if img contains "src=" %}
                {% assign srcPart = img | split: 'src="' | last %}
                {% if srcPart == img %}{% assign srcPart = img | split: "src='" | last %}{% endif %}
                {% if srcPart != img %}
                  {% assign imageUrl = srcPart | split: '"' | first | split: "'" | first | strip %}
                  {% break %}
                {% endif %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endif %}

        {% assign finalImageUrl = imageUrl %}
        {% if imageUrl != "" and imageUrl != nil %}
          {% unless imageUrl contains "://" %}
            {% assign finalImageUrl = imageUrl | relative_url %}
          {% endunless %}
        {% endif %}

        <div class="devlog-post-card {% if isLatest %}latest-post{% endif %} {% if imageUrl != "" and imageUrl != nil %}has-image{% endif %}" 
             data-project="{{ post.project | downcase }}" 
             data-tags="{{ post.tags | join: ',' | downcase }}">
          
          {% if imageUrl != "" and imageUrl != nil %}
            <div class="devlog-post-image-side" style="background-image: url('{{ finalImageUrl }}');">
              <div class="devlog-post-image-gradient"></div>
            </div>
          {% endif %}

          <div class="devlog-post-card-inner">
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

  <button id="toggleSidebarButton" class="devlog-toggle-sidebar-button" aria-controls="devlogSidebarContent" aria-expanded="false">Show Filters</button>

  <div class="devlog-sidebar" id="devlogSidebarContent" style="display: flex; flex-direction: column; gap: 20px; width: 300px; flex-shrink: 0;">
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
  
</div>
<div id="sidebarScrim" class="devlog-sidebar-scrim"></div>

<style>
  .devlog-post-card {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    background: #f5f5f5;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 200px;
    position: relative;
  }

  .devlog-post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }

  .devlog-post-card.latest-post {
    margin: 30px 0;
    min-height: 280px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .devlog-post-card.latest-post .devlog-post-card-inner {
    padding: 25px;
  }

  .devlog-post-card.latest-post h2 {
    font-size: 1.6em;
    margin-bottom: 15px;
  }

  .devlog-post-card.latest-post .devlog-post-excerpt {
    font-size: 1.05em;
    line-height: 1.5;
  }

  .devlog-post-card.has-image .devlog-post-image-side {
    flex: 0 0 40%;
    min-width: 300px;
    min-height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    background-repeat: no-repeat;
  }

  .devlog-post-card.latest-post.has-image .devlog-post-image-side {
    flex: 0 0 40%;
  }

  .devlog-post-image-gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 150px;
    background: linear-gradient(to right, transparent, #f5f5f5);
    z-index: 1;
  }

  .devlog-post-card-inner {
    padding: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    background: transparent;
  }

  .devlog-toggle-sidebar-button {
    display: none !important;
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

  .devlog-main-content {
    flex: 1 !important;
    width: auto !important;
    order: initial !important;
  }

  .devlog-sidebar {
    position: fixed !important;
    top: 85px !important;
    right: 0 !important;
    width: 300px !important;
    height: calc(100vh - 85px) !important;
    padding: 20px !important;
    box-sizing: border-box !important;
    background-color: transparent !important;;
    overflow-y: auto !important;
    z-index: 999 !important;
    transform: none !important;
    transition: none !important;
  }

  body.devlog-sidebar-open-no-scroll {
    overflow: hidden !important;
  }

  .devlog-sidebar-scrim {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .devlog-page-container {
      flex-direction: column !important;
      width: 100% !important;
      padding: 20px 15px !important;
      margin: 0 !important;
      box-sizing: border-box !important;
      gap: 20px !important;
      overflow-x: hidden;
    }
    .devlog-main-content {
      width: 100% !important;
      flex: none !important;
      order: 1;
      margin: 0;
    }

    .devlog-toggle-sidebar-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      position: fixed !important;
      top: 50% !important;
      right: 0px !important;
      transform: translateY(-50%) !important;
      width: 30px !important;
      height: 70px !important;
      padding: 0 !important;
      background-color: #4CAF50 !important;
      color: white !important;
      border: none !important;
      border-top-left-radius: 15px !important;
      border-bottom-left-radius: 15px !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      z-index: 1010 !important;
      box-shadow: -2px 0 5px rgba(0,0,0,0.2) !important;
      cursor: pointer !important;
      font-size: 20px !important;
      line-height: 1 !important;
      transition: right 0.3s ease-in-out, background-color 0.3s ease-in-out !important;
    }

    .devlog-sidebar {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      width: min(300px, 85vw) !important;
      height: 100vh !important;
      background-color: #ffffff !important;
      padding: 20px !important;
      box-sizing: border-box !important;
      transform: translateX(100%) !important;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important;
      z-index: 1005 !important;
      box-shadow: -3px 0 10px rgba(0,0,0,0.15) !important;
      overflow-y: auto;
    }
    
    .devlog-sidebar-scrim.visible {
      display: block;
      opacity: 1;
    }

    .devlog-sidebar.sidebar-visible {
      transform: translateX(0) !important;
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
      flex-direction: column;
      min-height: auto !important;
    }
    
    .devlog-post-card.has-image .devlog-post-image-side {
      flex: none;
      width: 100%;
      height: 200px;
    }

    .devlog-post-image-gradient {
      width: 100%;
      height: 80px;
      top: auto;
      bottom: 0;
      background: linear-gradient(to bottom, transparent, #f5f5f5);
    }

    .devlog-post-card.latest-post .devlog-post-card-inner {
      padding: 20px !important;
    }

    .devlog-post-card.latest-post h2 {
      font-size: 1.5em;
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
    .devlog-post-card-inner {
        line-height: 1.6;
    }
    .devlog-post-excerpt {
        margin-bottom: 15px !important;
    }
    .devlog-read-more {
      font-weight: bold !important;
      padding-top: 5px !important;
      padding-bottom: 5px !important;
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

  const toggleButton = document.getElementById('toggleSidebarButton');
  const sidebarContent = document.getElementById('devlogSidebarContent');
  const sidebarScrim = document.getElementById('sidebarScrim');
  const body = document.body;

  if (toggleButton && sidebarContent) {
    sidebarContent.setAttribute('aria-hidden', 'true');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '&#9664;';

    function openSidebar() {
      sidebarContent.classList.add('sidebar-visible');
      sidebarContent.setAttribute('aria-hidden', 'false');
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.innerHTML = '&#9654;';
      
      requestAnimationFrame(() => {
        const sidebarActualWidth = sidebarContent.offsetWidth;
        toggleButton.style.right = `${sidebarActualWidth}px`;
      });
      
      if (sidebarScrim) sidebarScrim.classList.add('visible');
      body.classList.add('devlog-sidebar-open-no-scroll');
    }

    function closeSidebar() {
      sidebarContent.classList.remove('sidebar-visible');
      sidebarContent.setAttribute('aria-hidden', 'true');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.innerHTML = '&#9664;';
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
