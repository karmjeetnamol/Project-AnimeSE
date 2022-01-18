var searchVal = document.querySelector('.searchVal');
var cardBody = document.getElementById('card');
var displayT = document.getElementById('time');
var btn;
var addBtn = document.getElementById('addBtn');
var addText = document.getElementById('addText');
var order = document.querySelector('ol');
var obj = [];
var obj2 = [];
var backBtn = document.querySelector('.back');

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
    title.setAttribute('id', 'listName');
    title.innerHTML = data.results[i].title;

    btn = document.createElement('button');
    btn.setAttribute('class', 'Add');
    btn.innerHTML = 'Add to List';

    listTag.setAttribute('class', 'cell');

    listTag.appendChild(btn);
    aTag.append(cardImage);
    cardImage.append(image);
    aTag.append(cardTitle);
    cardTitle.append(title);
    listTag.append(aTag);
    cardBody.append(listTag);
}
})
}

addBtn.addEventListener('click', addToList);

function addToList() {
    obj.push(addText.value);
    addText.value = '';
    const myJSON = JSON.stringify(obj);
    localStorage.setItem('title', myJSON);
    getList();
}

function getList() {
    order.innerHTML = '';
    obj = JSON.parse(localStorage.getItem('title'));
    for(let i = 0; i < obj.length; i++) {
        var item = document.createElement('li');
        item.innerHTML = obj[i];
        order.append(item);
    }
    
}

refresh();

function refresh() {
    obj2 = JSON.parse(localStorage.getItem('title'));
    for(let i = 0; i < obj2.length; i++) {
        var item = document.createElement('li');
        item.innerHTML = obj2[i];
        order.append(item);
    }
}

backBtn.addEventListener('click', home);

function home() {
    window.location.assign('file:///C:/Users/chris/code/Project1/Project-AnimeSE/index.html');
}



function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a');
    displayT.innerHTML = rightNow;
  }

  setInterval(displayTime, 1000);
