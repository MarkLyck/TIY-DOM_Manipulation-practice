var $farmers = $('#farmers');
var $cats = $('#cats');

var farmersWithin10Miles = [];

farmersData.forEach(function(farmer){
  var distance = farmer.marketname.split(' ')[0];
  if (Number(distance) <= 10) {
    var farmerName = farmer.marketname.split(' ');
    farmerName.shift();
    var farmerString = farmerName.join(' ');
    farmersWithin10Miles.push(farmerString);
  }
});

farmersWithin10Miles.forEach(function(farmer){
  var liHTML = '<li>' + farmer + '</li>';
  var $li = $(liHTML);
  $farmers.append($li);
});

cats.data.forEach(function(cat){
  // console.log(cat.images.fixed_height.url);
  var liHTML = '<li><img src="' + cat.images.fixed_height.url + '"></li>';
  var $li = $(liHTML);
  $cats.append($li);
});

var $beers = $('#beers');
var $berryBtn = $('.berry');
var $apricotsBtn = $('.apricot');
var $barrelAgedBtn = $('.barrel-aged');

//Berries
$berryBtn.on('click',function(){
  var beerList = [];
  $beers.empty();
  beers.data.forEach(function(beer){
    if(beer.description !== undefined) {
      if (beer.description.indexOf('berry') !== -1 || beer.description.indexOf('berries') !== -1) {

        beerList.push(beer.name);
      }
    }
    if(beer.description !== undefined) {
      if (beer.description.indexOf('berry') !== -1 || beer.description.indexOf('berries') !== -1) {
        if (beerList.indexOf(beer.name) === -1) {
          beerList.push(beer.name);
        }
      }
    }
  });
  beerList.forEach(function(beer){
    var liHTML = '<li>' + beer + '</li>';
    var $li = $(liHTML);
    $beers.append($li);
  });
});
// Apricots
$apricotsBtn.on('click',function(){
  var beerList = [];
  $beers.empty();
  beers.data.forEach(function(beer){
    if(beer.description !== undefined) {
      if (beer.description.indexOf('apricot') !== -1) {

        beerList.push(beer.name);
      }
    }
    if(beer.description !== undefined) {
      if (beer.description.indexOf('apricot') !== -1) {
        if (beerList.indexOf(beer.name) === -1) {
          beerList.push(beer.name);
        }
      }
    }
  });
  beerList.forEach(function(beer){
    var liHTML = '<li>' + beer + '</li>';
    var $li = $(liHTML);
    $beers.append($li);
  });
});

$barrelAgedBtn.on('click',function(){
  var beerList = [];
  $beers.empty();
  beers.data.forEach(function(beer){
    if(beer.description !== undefined) {
      if (beer.description.indexOf('barrel-aged') !== -1) {

        beerList.push(beer.name);
      }
    }
    if(beer.description !== undefined) {
      if (beer.description.indexOf('barrel-aged') !== -1) {
        if (beerList.indexOf(beer.name) === -1) {
          beerList.push(beer.name);
        }
      }
    }
  });
  beerList.forEach(function(beer){
    var liHTML = '<li>' + beer + '</li>';
    var $li = $(liHTML);
    $beers.append($li);
  });
});

var $abvs = $('#ABVS');
var abvObj = {};

beers.data.forEach(function(beer){
  var abv = 0;
  if (beer.abv !== undefined) {
    if (abvObj[Math.round(beer.abv)] === undefined) {
      abvObj[Math.round(beer.abv)] = 1;
    } else {
      abvObj[Math.round(beer.abv)]++;
    }
  }
});

for (var abv in abvObj) {
  console.log(abv + ' : ' + abvObj[abv]);
  var trHTML = '<tr><td>' + abv + '</td><td>' + abvObj[abv] +'</td></tr>';
  var $tr = $(trHTML);
  $abvs.append($tr);
}

// console.log(abvObj);
