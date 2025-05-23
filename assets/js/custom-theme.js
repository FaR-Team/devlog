function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    if (typeof window.updateUtterancesTheme === 'function') {
        window.updateUtterancesTheme();
    }
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