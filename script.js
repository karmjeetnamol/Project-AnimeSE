var searchBtn = document.querySelector('button');
var searchVal = document.querySelector('.searchVal');
var aTag = document.querySelector('.a-tag');
var iTag = document.querySelector('.img-tag');
var spanText = document.querySelector('.span1');
var card = document.querySelector('.hidden');
var btn = document.querySelector('.vis');
var s = document.querySelector('.s');


function getUrl() {
    var requestUrl = 'https://api.jikan.moe/v3/search/anime?q=Naruto' + searchVal.value;
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
                s.innerHTML = data.results[0].synopsis;
            });

    }
    getApi(requestUrl);
}
searchBtn.addEventListener('click', getUrl());
btn.onclick = function() {
    card.style.visibility = 'visible';
}

