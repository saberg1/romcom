// Query Selectors
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewButton = document.querySelector('.view-saved-button');
var makeButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover; // = randomCover(covers, titles, descriptors);

//Event listeners
window.addEventListener('load', randomCover);
randomButton.addEventListener('click', randomCover);

//Event handlers
function randomCover(){
  var newCover = createCover(covers,titles,descriptors);
  console.log(newCover)
  coverImage.src = newCover.cover;
  coverTitle.innerText = newCover.title;
  tagLine1.innerText = newCover.tagline1;
  tagLine2.innerText = newCover.tagline2;
}

function createCover(covers, titles, descriptors) {
  return new Cover(
    getRandomElement(covers),
    getRandomElement(titles),
    getRandomElement(descriptors),
    getRandomElement(descriptors));
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


