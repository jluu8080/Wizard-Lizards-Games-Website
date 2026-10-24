import {loadPage} from "../model/model.js";

function changeRoute()
{
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

    console.log(pageID);
    loadPage(pageID);
    window.scroll(0,0);
}


function initApp()
{
    loadPage("home");
    window.addEventListener("hashchange", changeRoute);
}

// initApp();