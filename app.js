
var searchValue = $(".searchTerm").val();




var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5dd8e97f3a674cca9ec9825981c0e780",
  'q': searchValue
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


