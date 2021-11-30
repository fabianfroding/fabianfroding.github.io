const templateHeader = document.createElement('template');

templateHeader.innerHTML = `
    <header>
        <div class="landing-text" id="landing-text">
            <h1>Fabian Fröding</h1>
            <h6>Software Engineer & Game Developer</h6>
        </div>
    </header>
    <div class="separator-line"></div>
`;

document.body.prepend(templateHeader.content);
