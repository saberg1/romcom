// Query Selectors for book image
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
//buttons
var randomButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewButton = document.querySelector('.view-saved-button');
var makeButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var newBookButton = document.querySelector('.create-new-book-button');
//formViews
var savedView = document.querySelector('.saved-view');
var hideHomePage = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
//input Query Selectors
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descriptorInput1 = document.querySelector('.user-desc1');
var descriptorInput2 = document.querySelector('.user-desc2');
var savedCoversGrid = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [];
var currentCover;

//Event listeners
window.addEventListener('load', randomCover);
randomButton.addEventListener('click', randomCover);

makeButton.addEventListener('click', function(){
  navToSection(hideHomePage, formView)
});
viewButton.addEventListener('click', function() {
  navToSection(hideHomePage, savedView)
});
homeButton.addEventListener('click', function(){
  navToSection(savedView, hideHomePage)
});

saveButton.addEventListener('click', saveMiniPoster);
newBookButton.addEventListener('click', createBook);

//Event Handlers
function saveMiniPoster (){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    showSavedCovers()
  }
};

function createBook(event){
  event.preventDefault()
  currentCover = new Cover()
    titles.push(titleInput.value);
    covers.push(coverInput.value);
    descriptors.push(descriptor1.value);
    descriptors.push(descriptor2.value);
    coverImage.src = covers[covers.length-1];
    coverTitle.innerText = titles[titles.length-1];
    tagLine1.innerText = descriptors[descriptors.length-2];
    tagLine2.innerText = descriptors[descriptors.length-1];
};

function showSavedCovers(){
      savedCoversGrid.innerHTML += `<div class='mini-cover' ondblclick="remove(this)>
      <img class='mini-cover' src=${currentCover.cover}>
      <h2 class='cover-title first-letter'>${currentCover.title}</h2>
      <h3 class='tagline'>A tale of ${currentCover.tagline1} and ${currentCover.tagline2}</h3>
      </div>
      `
};

function randomCover() {
  currentCover = createCover(covers, titles, descriptors);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;
};

function createCover(covers, titles, descriptors) {
  return new Cover(
    getRandomElement(covers),
    getRandomElement(titles),
    getRandomElement(descriptors),
    getRandomElement(descriptors));
};

function getRandomElement(array) {
  return array[getRandomIndex(array)];
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function navToSection(origin, destination) {
  origin.classList.toggle('hidden');
  destination.classList.toggle('hidden');
};

function remove(el) {
  var element = el;
  element.remove();
};