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


function showMovies(movies) {
    main.innerHTML = ""; // Clear previous movies
  
    movies.forEach((movie) => {
      const { Title, Poster, Year, imdbRating, Plot } = movie;
  
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
        <div class="movie">
          <img src="${Poster}" alt="${Title}">
          <div class="movie__info">
            <h3>${Title}</h3>
            <span class="${getClassByRate(imdbRating)}">${imdbRating}</span>
            <h2>${Year}</h2>
          </div>
          <div class="overview">
            <h3>${Plot}</h3>
          </div>
        </div>`;
  
      main.appendChild(movieEl);
    });
  }
  
  function getClassByRate(Ratings) {
    if (Ratings >= 8) {
      return "green";
    } else if (Ratings >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = search.value;
  
    if (searchTerm && searchTerm.trim() !== "") {
      getMovies(searchTerm);
    } else {
      window.location.reload();
    }
  });
  

 

