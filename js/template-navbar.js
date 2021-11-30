const template = document.createElement('template');

template.innerHTML = `
    <nav class="top-nav">
    <ul class="nav-list">
        
        <li>
            <a href="index.html#portfolio" class="nav-link">Projects</a>
        </li>
        <li>
            <a href="index.html#experience" class="nav-link">Experience</a>
        </li>
        <li id="nav-about">
            <a href="index.html#about" class="nav-link">About</a>
        </li>
        <li id="nav-services">
            <a href="index.html#services" class="nav-link">Services</a>
        </li>
        <li>
            <a href="index.html#contact" class="nav-link">Contact</a>
        </li>
    </ul>
    </nav>
`;

document.body.prepend(template.content);