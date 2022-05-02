async function searchNews(url){
    try{
        let res = await fetch(url);

        let data = await res.json();
        return data;
    }catch(err)
    {
        console.log(err)
    }
}

function append(data,container){
    data.map((el)=>{
        let div= document.createElement("div");
        div.setAttribute("class","news");
        

        let smallDiv = document.createElement("div");
        

        let title = document.createElement("h3");
        title.innerText=el.title;

        let image = document.createElement("img");
        image.src=el.urlToImage;

        let des = document.createElement("p");
        des.innerText = el.description;

        smallDiv.append(title,des)

        div.append(image,smallDiv);

        container.append(div)
    })
}

async function searchInput(url){
    try{
        let res = await fetch(url);

        let data = await res.json();

        return data
    }catch(err){
        console.log(err)
    }
}

export {searchNews,append,searchInput};