// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import {searchNews,append,searchInput} from "./fetch.js";

let sidebar = document.getElementById("sidebar").children;

    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
    searchNews(url).then((res)=>{
        console.log(res)
        let container = document.getElementById("results");
        container.innerHTML=null;
        append(res.articles,container);
    })

function sideSearch(){
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    searchNews(url).then((res)=>{
        console.log(res)
        let container = document.getElementById("results");
        container.innerHTML=null;
        append(res.articles,container);
    })
}

for(let el of sidebar)
{
    el.addEventListener("click",sideSearch);
}

let search = (e)=>{
    if(e.key==="Enter")
    {
        let query = document.getElementById("search_input").value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        searchInput(url).then((res)=>{
            console.log(res);
           
            // append(res.articles,container);
            localStorage.setItem("news",JSON.stringify(res))
        })
    }
}

document.getElementById("search_input").addEventListener("keydown",search)



