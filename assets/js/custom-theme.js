function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Apply saved theme and initialize Highlight.js on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    } else {
        console.error("Highlight.js not loaded, cannot highlightAll()");
    }
});