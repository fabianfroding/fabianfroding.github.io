const templateNav = document.createElement('template');

templateNav.innerHTML = `
    <nav class="top-nav">
        <ul class="nav-list">
            
            <li>
                <a href="/#portfolio" class="nav-link">Projects</a>
            </li>
            <li>
                <a href="/#experience" class="nav-link">Experience</a>
            </li>
            <li id="nav-about">
                <a href="/#about" class="nav-link">About</a>
            </li>
            <li id="nav-services">
                <a href="/#services" class="nav-link">Services</a>
            </li>
            <li>
                <a href="/#contact" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
`;

document.body.prepend(templateNav.content);
