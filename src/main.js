// Query Selectors for book image
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
//buttons
var randomButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var newBookButton = document.querySelector('.create-new-book-button');

var viewButton = document.querySelector('.view-saved-button');
var makeButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

//formViews
var savedView = document.querySelector('.saved-view');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
//input Query Selectors
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descriptorInput1 = document.querySelector('.user-desc1');
var descriptorInput2 = document.querySelector('.user-desc2');
var savedCoversGrid = document.querySelector('.saved-covers-section');

//Global Variables
var savedCovers = [];
var currentCover;

//Event listeners
// window.addEventListener('load', randomCover);
// randomButton.addEventListener('click', randomCover);

// makeButton.addEventListener('click', function(){
//   toggleClasses(homeView, formView)
//   buttonTester(homeButton, randomButton, saveButton)
// });
// viewButton.addEventListener('click', function() {
//   showSavedCovers()
//   toggleClasses(homeView, savedView)
//   buttonTester(homeButton, randomButton, saveButton)
// });
// homeButton.addEventListener('click', function(){
//   toggleClasses(savedView, homeView)
//   buttonTester(homeButton, randomButton, saveButton)
// });


// saveButton.addEventListener('click', saveMiniPoster);
// newBookButton.addEventListener('click', createBook);

//Event listeners
window.addEventListener('load', randomCover);
randomButton.addEventListener('click', randomCover);
makeButton.addEventListener('click', viewForm)
viewButton.addEventListener('click', viewSaveCovers)
homeButton.addEventListener('click', goHomePage)
newBookButton.addEventListener('click', createBook)
saveButton.addEventListener('click', saveMiniPoster)

//Event Handlers

function viewForm() {
  formView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  homeView.classList.add('hidden')
  randomButton.classList.add('hidden');
  saveButton.classList.add('hidden')
}
function goHomePage() {
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
  homeView.classList.remove('hidden')
  randomButton.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  homeButton.classList.add('hidden')
}
function viewSaveCovers() {
  savedView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  homeView.classList.add('hidden')
  saveButton.classList.add('hidden')
  formView.classList.add('hidden')
  randomButton.classList.add('hidden')
  showSavedCovers()
}

function randomCover() {
  currentCover = createCover(covers, titles, descriptors);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;
  saveMiniPoster()
}

function saveMiniPoster (){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    // showSavedCovers()
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
  return array[getRandomIndex(array)]
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// function toggleClasses(origin, destination) {
//   origin.classList.toggle('hidden');
//   destination.classList.toggle('hidden');
// };

// function buttonTester(hide1, hide2, hide3){
//   hide1.classList.toggle('hidden');
//   hide2.classList.toggle('hidden');
//   hide3.classList.toggle('hidden');
// }

function remove(el) {
  var element = el;
  element.remove();
};