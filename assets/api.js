

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + key;
let key = "SAYVTFmk4oayqKSElzvGgGG77zesCbEO";

$.ajax({
    url: queryURL,
    method: "GET"
  })

 //grabbing from response object
    .then(function(response) {
        console.log(response);

        let searchTerm = ;
        let startYear = ;
        let endYear = ;

    }