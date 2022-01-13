var requestUrl = 'https://api.jikan.moe/v3/anime/1735';
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