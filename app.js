$(document).ready(function(){
// var searchValue = $(".searchTerm").val();
// var numRecords = ($".numRecords").val();
// var startYear = $(".startYear").val() + "0101";
// var endYear = $(".endYear").val() + "1231";

var searchValue = "penguins";
var numRecords = 5;
var startYear = "20110101"
var endYear = "20161231"



// $(".clearButton").on("click", function(event) {});

// $(".searchButton").on("click", function(event) {});


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5dd8e97f3a674cca9ec9825981c0e780",
  'q': searchValue,
  'begin_date': startYear,
  'end_date': endYear
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(result.response.docs[0].headline.main);
}).fail(function(err) {
  throw err;
});


});