import home from "../pages/home.js";

import team from "../pages/team.js";

import projects from "../pages/projects.js";

export function loadPage(pageID)
{
    const main =document.querySelector("main");

    switch(pageID)
    {
        case "home":
            main.innerHTML = home;
        break;

        case "projects":
            main.innerHTML = projects;
        break;

        case "team":
            main.innerHTML = team
        break;
    }
}