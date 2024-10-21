---
layout: home
---

# Welcome to the Project Farmoxel Devlog

Follow our journey in game development as we create an exciting farming simulation game with a unique voxel twist!

## Latest Updates

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})

*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt | strip_html | truncatewords: 50 }}

---
{% endfor %}

[View all posts](/archive)
