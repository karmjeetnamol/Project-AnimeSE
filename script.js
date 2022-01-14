var searchBtn = document.querySelector('button');
var searchVal = document.querySelector('.searchVal');
var requestUrl;


function getUrl() {
 requestUrl = 'https://api.jikan.moe/v3/search/anime?q=Naruto' +  searchVal.value; 
 console.log(requestUrl);
 function getApi(request) {
    fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
  }
 getApi(requestUrl);
}
searchBtn.addEventListener('click', getUrl());
