const apiKey = "c8c68236"
const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=c8c68236"
const form = document.getElementById("form");
const search = document.getElementById("search");
const movieList = document.querySelector(".movie");

// getMovies()

// async function  getMovies(apiUrl){
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     showMovies(data.results);

    
//     movieList.innerHTML = data.Search.map((movie) => movieHTML(movie)).join("");
// }

async function getMovies(query) {
    const res = await fetch(`${apiUrl}&s=${query}`);
    const data = await res.json();
  
    if (data.Search) {
      showMovies(data.Search);
    } else {
      main.innerHTML = "<h2>No Movies Found</h2>";
    }
  }
getMovies();














function showMovies(movies){
    main.innerHTML = ""
    movies.forEach((movie) => {
        const { title, Poster, Year, Ratings, Plot}=movie

      const movieEl = document.createElement("div")
      movieEl.classList.add("movie")
      movieEl.innerHTML= 
       
    ` <div class="movie">
            <img src="${Poster}" alt="${title}">
            <div class="movie__info">
                <h3>${title}</h3>
                <span class="${getClassByRate(Ratings)}">${Ratings}</span>
                <h2>"${Year}"</h2>
            </div>
            <div class="over-view">
            <h3>"${Plot}"</h3>

            </div>

        </div>`
     main.appendChild(movieEl)
        
    });;
}
function getClassByRate(Ratings){
    if(Ratings>=8){
        return "green"
    }
    else if (Ratings>=5){
        return "orange"
    }
    
        else{
            return "red"
        }
    }

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const searchTerm = search.value
    if(searchTerm && search!==""){
        showMovies()

    }
    
    else{
        window.location.reload
    }
})









