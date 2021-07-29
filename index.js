async function searchMovie(){
    let div=document.createElement("div")
    let img_div=document.createElement("div")
    let display_div=document.getElementById("display_movie")
    let movie_name=document.getElementById("movie_name").value
    try{
        
        div.setAttribute("class","movie_details")
        let res=await fetch(`http://www.omdbapi.com/?t=${movie_name}&apikey=97ab8bd4`)
        let data=await res.json()

        if(data.Response=='False'){
            display_div.innerHTML=null
            display_div.innerHTML=`<img src="https://media.tenor.com/images/d5d51c0c23a6fe6b5e445939044e6b65/tenor.gif" alt="">`
        }
        else{
            img_div.innerHTML=`<img src="${data.Poster}" alt="">`
            div.innerHTML=`<h2> <span>Movie:</span> ${data.Title}</h2>
            <p> <span>Release Date:</span> ${data.Released}</p><p> <span>imdb rating:</span> ${data.imdbRating}</p> 
            <p> <span>Genre:</span> ${data.Genre}</p>
            <p> <span>Summary:</span> ${data.Plot}</p><p> <span>Duration:</span> ${data.Runtime}</p>`
            let rec=document.getElementById("rec")
            rec.innerHTML=null
            if(data.imdbRating > 8.5){
              
                rec.setAttribute("class","recommend")
                rec.innerHTML=`Recommended for you`
                
            }
            
            display_div.innerHTML=null
            display_div.append(img_div,div)
            console.log(data);
        }
    }
    catch (err){
        console.log(err);
    }
}

// searchMovie()