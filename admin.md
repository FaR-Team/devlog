---
layout: page
title: Admin
---

<h2>Create New Post</h2>

<form action="https://api.staticman.net/v3/entry/github/FaR-Team/devlog/main/posts" method="POST">
  <input name="options[redirect]" type="hidden" value="https://far-team.github.io/devlog">
  
  <label for="title">Title:</label>
  <input type="text" name="fields[title]" id="title" required>
  
  <label for="content">Content:</label>
  <textarea name="fields[content]" id="content" required></textarea>
  
  <label for="tags">Tags (comma-separated):</label>
  <input type="text" name="fields[tags]" id="tags">
  
  <button type="submit">Create Post</button>
</form>
