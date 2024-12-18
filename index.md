<div style="display: flex; gap: 30px; max-width: 1200px; margin: 0 auto;">
  <!-- Main Content -->
  <div style="flex: 1;">
    <div style="text-align: center; margin: 40px 0;">
      <h1>F.a.R. Team Devlog</h1>
      <blockquote style="font-style: italic; color: #666;">
        "Dive into the F.a.R. Team Devlog! From dev updates to creative insights, we share everything that goes into crafting our unique gaming experiences."
      </blockquote>
    </div>

    <div id="postsContainer">
      {% for post in site.posts %}
        <div style="display: flex; margin: 20px 0; background: #f5f5f5; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          {% if post.content contains "![" %}
            {% assign images = post.content | split: "![" %}
            {% assign firstImage = images[1] | split: ")" | first %}
            {% assign imageUrl = firstImage | split: "](" | last %}
            <div style="flex: 0 0 200px; background-image: url({{ imageUrl }}); background-size: cover; background-position: center;"></div>
          {% endif %}
          <div style="padding: 20px; flex: 1;">
            <h2 style="margin-top: 0;"><a href="/devlog/{{ post.url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h2>
            <p style="color: #666;">{{ post.content | strip_html | truncatewords: 50 }}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
              <div style="display: flex; align-items: center;">
                {% if post.project == "farmoxel" %}
                  <img src="{{ '/assets/images/farmoxel-icon.png' | relative_url }}" alt="Farmoxel" style="height: 24px; margin-right: 10px;">
                {% elsif post.project == "roommakers" %}
                  <img src="{{ '/assets/images/roommakers-icon.png' | relative_url }}" alt="Room Makers" style="height: 24px; margin-right: 10px;">
                {% elsif post.project == "kta" %}
                  <img src="{{ '/assets/images/kta-icon.png' | relative_url }}" alt="KTA" style="height: 24px; margin-right: 10px;">
                {% endif %}
                <span style="color: #888; font-size: 0.9em;">{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.tags %}
                  <div style="margin-left: 15px;">
                    {% for tag in post.tags %}
                      <span style="background: #e0e0e0; padding: 3px 8px; border-radius: 12px; font-size: 0.8em; margin-right: 5px;">{{ tag }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
              <a href="/devlog/{{ post.url }}" style="color: #4CAF50; text-decoration: none;">Read more →</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <!-- Sidebar -->
  <div style="width: 300px; padding: 25px; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: fit-content; position: sticky; top: 20px; margin-top: 40px;">
    <!-- Project Filter -->
    <h3 style="margin-top: 0; color: #333; font-size: 1.2em; margin-bottom: 15px;">Filter by Project</h3>
    <select id="projectFilter" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 20px; background: #f8f8f8; cursor: pointer;">
      <option value="all">All Projects</option>
      <option value="farmoxel">Farmoxel</option>
      <option value="roommakers">Room Makers</option>
      <option value="kta">KTA</option>
    </select>

    <!-- Search -->
    <h3 style="color: #333; font-size: 1.2em; margin-bottom: 15px;">Search Posts</h3>
    <input type="search" id="searchPosts" placeholder="Search posts..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 20px;">

    <!-- Archives -->
    <h3 style="color: #333; font-size: 1.2em; margin-bottom: 15px;">Archives</h3>
    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
    {% for year in postsByYear %}
      <details style="margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 12px;">
        <summary style="cursor: pointer; font-weight: 500; color: #444;">{{ year.name }}</summary>
        <ul style="list-style: none; padding-left: 15px; margin-top: 10px;">
          {% for post in year.items %}
            <li style="margin-bottom: 8px;"><a href="/devlog/{{ post.url }}" style="color: #666; text-decoration: none; transition: color 0.2s;">{{ post.title }}</a></li>
          {% endfor %}
        </ul>
      </details>
    {% endfor %}
  </div>
</div>

<script>
  document.getElementById('projectFilter').addEventListener('change', filterPosts);
  document.getElementById('searchPosts').addEventListener('input', filterPosts);

  function filterPosts() {
    const project = document.getElementById('projectFilter').value;
    const searchTerm = document.getElementById('searchPosts').value.toLowerCase();
    const posts = document.querySelectorAll('#postsContainer > div');
    
    posts.forEach(post => {
      const postProject = post.querySelector('img')?.alt.toLowerCase();
      const postContent = post.textContent.toLowerCase();
      const projectMatch = project === 'all' || postProject === project;
      const searchMatch = postContent.includes(searchTerm);
      
      post.style.display = projectMatch && searchMatch ? 'flex' : 'none';
    });
  }
</script>