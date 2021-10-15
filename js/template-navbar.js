const template = document.createElement('template');

template.innerHTML = `
    <nav class="top-nav">
    <ul class="nav-list">
        <li>
            <a href="portfolio.html" class="nav-link">Portfolio</a>
        </li>
        <li>
            <a href="resume.html" class="nav-link">Resume</a>
        </li>
        <li id="nav-about">
            <a href="about.html" class="nav-link">About</a>
        </li>
        <li>
            <a href="contact.html" class="nav-link">Contact</a>
        </li>
    </ul>
    </nav>
`;

document.body.prepend(template.content);