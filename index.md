<div style="text-align: center; margin: 40px 0;">
  <h1>F.a.R. Team Devlog</h1>
  <blockquote style="font-style: italic; color: #666;">
    "Dive into the F.a.R. Team Devlog! From dev updates to creative insights, we share everything that goes into crafting our unique gaming experiences."
  </blockquote>
</div>

{% for post in site.posts %}
  <div style="display: flex; margin: 20px 0; background: #f5f5f5; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    {% if post.content contains "![" %}
      {% assign images = post.content | split: "![" %}
      {% assign firstImage = images[1] | split: ")" | first %}
      {% assign imageUrl = firstImage | split: "](" | last %}
      <div style="flex: 0 0 200px; background-image: url({{ imageUrl }}); background-size: cover; background-position: center;"></div>
    {% endif %}
    <div style="padding: 20px; flex: 1;">
      <h2 style="margin-top: 0;"><a href="{{ post.url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a></h2>
      <p style="color: #666;">{{ post.content | strip_html | truncatewords: 50 }}</p>
      <a href="/devlog{{ post.url }}" style="color: #4CAF50; text-decoration: none;">Read more →</a>
    </div>
  </div>
{% endfor %}