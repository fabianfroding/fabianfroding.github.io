function toggleSEProjects() {
    showSEPortfolio(true);
    showGDPortfolio(false);

    const el = document.getElementById("se-projects-btn");
    el.style.backgroundColor = '#577efd44';
    const el2 = document.getElementById("gd-projects-btn");
    el2.style.backgroundColor = '#00000000';
}

function toggleGDProjects() {
    showSEPortfolio(false);
    showGDPortfolio(true);

    const el = document.getElementById("gd-projects-btn");
    el.style.backgroundColor = '#577efd44';
    const el2 = document.getElementById("se-projects-btn");
    el2.style.backgroundColor = '#00000000';
}

function showSEPortfolio(val) {
    document.getElementById("portfolio-se").style.display = val ? "block" : "none";
}

function showGDPortfolio(val) {
    document.getElementById("portfolio-gd").style.display = val ? "block" : "none";
}

// Async call on page load.
toggleGDProjects();
