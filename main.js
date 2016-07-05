
// Messed around with some ES6 stuff, to try to do this with a smaller amount of code.
// Before: 131 lines, 3294 characters
// After: 89 lines, 1933 Characters

let $farmers = $('#farmers')
let $cats = $('#cats')

let farmersWithin10Miles = farmersData.filter((farmer) => {
  let distance = farmer.marketname.split(' ')[0]
  if (Number(distance) <= 10) {
    return true;
  }
})
.forEach((farmer) => {
  let farmerName = farmer.marketname.split(' ')
  farmerName.shift()
  let farmerString = farmerName.join(' ')
  let liHTML = '<li>' + farmerString + '</li>'
  let $li = $(liHTML)
  $farmers.append($li)
});

cats.data.forEach((cat) => {
  let liHTML = '<li><img src="' + cat.images.fixed_height.url + '"></li>'
  let $li = $(liHTML)
  $cats.append($li)
})

let $beers = $('#beers')
let $berryBtn = $('.berry')
let $apricotsBtn = $('.apricot')
let $barrelAgedBtn = $('.barrel-aged')

$berryBtn.on('click',() => {
  $beers.empty()
  filterBeerBy('berry')
  filterBeerBy('berries')
})

$apricotsBtn.on('click',() => {
  $beers.empty()
  filterBeerBy('apricot')
})

$barrelAgedBtn.on('click',() => {
  $beers.empty()
  filterBeerBy('barrel-aged')
})

let filterBeerBy = (filter) => {
  let beerList = beers.data.filter((beer) => {
    if(beer.description !== undefined) {
      if (beer.description.indexOf(filter) !== -1) {
        return true
      } else if (beer.name.indexOf(filter) !== -1) {
        return true
      }
    }
  })
  .map((beer) => {
    return beer.name
  })
  .forEach((beer) => {
    let liHTML = '<li>' + beer + '</li>'
    let $li = $(liHTML)
    $beers.append($li)
  })
}

let $abvs = $('#ABVS')
let abvObj = beers.data.reduce((obj, beer) => {
  if (beer.abv !== undefined) {
    if (obj[Math.round(beer.abv)] !== undefined) {
      obj[Math.round(beer.abv)]++
    } else {
      obj[Math.round(beer.abv)] = 1
    }
    return obj
  } else {
    if (obj.unspecified !== undefined) {
      obj.unspecified++
    } else {
      obj.unspecified = 1
    }
    return obj
  }
}, {})

for (let abv in abvObj) {
  let trHTML = '<tr><td>' + abv + '</td><td>' + abvObj[abv] +'</td></tr>'
  let $tr = $(trHTML)
  $abvs.append($tr)
}
