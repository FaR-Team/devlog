---
layout: page
title: Blog Archive
---

{% for post in site.posts %}
  <div style="display: flex; width: 100%; box-sizing: border-box; margin: 20px 0; background: #f5f5f5; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    {% if post.content contains "![" %}
      {% assign images = post.content | split: "![" %}
      {% assign firstImage = images[1] | split: ")" | first %}
      {% assign imageUrl = firstImage | split: "](" | last %}
      <div style="flex: 0 0 200px; background-image: url({{ imageUrl }}); background-size: cover; background-position: center;"></div>
    {% endif %}
    <div style="padding: 20px; flex: 1;">
      <h2 style="margin-top: 0;"><a href="{{ post.url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h2>
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
        <a href="{{ post.url }}" style="color: #4CAF50; text-decoration: none;">Read more →</a>
      </div>
    </div>
  </div>
{% endfor %}