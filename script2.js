var searchBtn = document.querySelector('button');
var searchVal = document.querySelector('.searchVal');
var cardBody = document.getElementById('card');
var displayT = document.getElementById('time');

document.getElementById('myButton').addEventListener('click', function(){
    console.log(searchVal.value);
    var requestUrl = 'https://api.jikan.moe/v3/search/anime?q=' + searchVal.value;
    console.log(requestUrl);
    getApi(requestUrl);
});

function getApi(url) {
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    cardBody.innerHTML = "";
for(let i = 0; i < 16; i++) {
    const listTag = document.createElement('li'); 
    const aTag = document.createElement('a');
    aTag.setAttribute('href', data.results[i].url);
    aTag.setAttribute('class', 'card');
    aTag.setAttribute('target', '_blank');
    
    const cardImage = document.createElement('figure');
    cardImage.setAttribute('class', 'card_image');

    const image = document.createElement('img');
    image.setAttribute('src', data.results[i].image_url);
    image.setAttribute('alt', data.results[i].title);

    const cardTitle = document.createElement('section');
    cardTitle.setAttribute('class', 'card_name');

    const title = document.createElement('span');
    title.innerHTML = data.results[i].title;

    listTag.setAttribute('class', 'cell');

    aTag.append(cardImage);
    cardImage.append(image);
    aTag.append(cardTitle);
    cardTitle.append(title);
    listTag.append(aTag);
    cardBody.append(listTag);
}
})
}

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a');
    displayT.innerHTML = rightNow;
  }

  setInterval(displayTime, 1000);
