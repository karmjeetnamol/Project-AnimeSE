var searchBtn = document.querySelector('button');
var searchVal = document.querySelector('.searchVal');
var requestUrl;
var aTag = document.querySelector('.a-tag');
var iTag = document.querySelector('.img-tag');
var spanText = document.querySelector('span');


function getUrl() {
    requestUrl = 'https://api.jikan.moe/v3/search/anime?q=Naruto' + searchVal.value;
    console.log(requestUrl);
    function getApi(request) {
        fetch(request)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                aTag.setAttribute('href', data.results[0].url);
                iTag.setAttribute('src', data.results[0].image_url);
                iTag.setAttribute('alt', data.results[0].title);
                spanText.innerHTML = data.results[0].title;
            });

    }
    getApi(requestUrl);
}
searchBtn.addEventListener('click', getUrl());
