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
var newBookButton = document.querySelector('.create-new-book-button')

//formViews
var savedCovers = document.querySelector('.saved-view')
var hideHomePage = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')

//input Query Selectors
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descriptorInput1 = document.querySelector('.user-desc1');
var descriptorInput2 = document.querySelector('.user-desc2');

var savedCoversGrid = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var miniPosters = [];
//var currentCover; // = randomCover(covers, titles, descriptors);



//Event listeners
window.addEventListener('load', randomCover);
randomButton.addEventListener('click', randomCover);

makeButton.addEventListener('click', viewForm)
viewButton.addEventListener('click', viewSaveCovers)
homeButton.addEventListener('click', goHomePage)
newBookButton.addEventListener('click', function(event){
  event.preventDefault()
  createBook()
});
saveButton.addEventListener('click', saveMiniPoster)

// viewForm
// savedCovers.add
// homeButton.addEventListener('click', viewHomePage);

//Event handlers
function saveMiniPoster (){
 var miniPoster = new Cover(coverImage.src, coverTitle.innerText,
    tagLine1.innerText, tagLine2.innerText)
    miniPosters.push(miniPoster)

}


function createBook(){
  var newBook = new Cover(coverInput.value,titleInput.value,
    descriptor1.value, descriptor2.value);
    //savedBookCovers.push(newBook)
    //console.log(savedBookCovers)

    titles.push(titleInput.value);
    covers.push(coverInput.value);
    descriptors.push(descriptor1.value);
    descriptors.push(descriptor2.value);

    coverImage.src = covers[covers.length-1];
    coverTitle.innerText = titles[titles.length-1];
    tagLine1.innerText = descriptors[descriptors.length-2];
    tagLine2.innerText = descriptors[descriptors.length-1];
}


function goHomePage() {
  savedCovers.classList.add('hidden');
  formView.classList.add('hidden');
  hideHomePage.classList.remove('hidden')
  randomButton.classList.remove('hidden');
  saveButton.classList.remove('hidden');
  homeButton.classList.add('hidden')
}

function viewSaveCovers() {
  savedCovers.classList.remove('hidden')
  hideHomePage.classList.add('hidden')
  saveButton.classList.add('hidden')
  formView.classList.add('hidden')
  randomButton.classList.add('hidden')
  homeButton.classList.remove('hidden')

  //for(var i = 0; miniPosters.length; i++){
      savedCoversGrid.innerHTML += `<section class='mini-cover'> ${miniPosters[0]}</section>
      <img class=${miniPosters[0].cover}`
  //}
  //var miniJPG = miniPosters.pop()
  //savedCoversGrid.innerHTML += `<div class='.mini-cover'> ${miniJPG.cover} </div>`
}

function viewForm() {
  formView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  hideHomePage.classList.add('hidden')
  randomButton.classList.add('hidden');
  saveButton.classList.add('hidden')
}

function randomCover() {
  var newCover = createCover(covers, titles, descriptors);
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
