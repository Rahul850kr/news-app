// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let data = JSON.parse(localStorage.getItem("news"));

// console.log(data)

import {navbar} from "../components/navbar.js";

import {searchInput,append} from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();


