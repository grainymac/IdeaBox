//Global Variables
var ideaListArr = [];

//--------------------------------------------Query Selectors
var saveBtn = document.querySelector("#save-btn");
var inputTitle = document.querySelector("#input-title");
var inputBody = document.querySelector("#input-body");
var cardTitle = document.querySelector("#card-title");
var cardText = document.querySelector("#card-text");
var singleCard = document.querySelector("#saved-ideas");
var formSection = document.querySelector("#form-section");
var deleteCard = document.querySelector("#delete-card");
var starredBtn = document.querySelector("#starred-btn");
//--------------------------------------------Event Listerners
saveBtn.addEventListener("click", saveIdeaCard);
formSection.addEventListener("input", disableButton);
starredBtn.addEventListener("click", showStarred);
//----------------------------------------------Functions
function saveIdeaCard(event) {
  event.preventDefault();
  var idea = new Idea(inputTitle.value, inputBody.value);
  ideaListArr.push(idea);
  reload();
  // singleCard.innerHTML += `<section class="single-card" id="single-card">
  //   <div class="card-top-bar">
  //     <img
  //     class="star-img"
  //     src="assets/star.svg"
  //     alt="star icon"
  //     />
  //     <img
  //     class="delete-img"
  //     src="assets/delete.svg"
  //     alt="delete icon"
  //     />
  //   </div>
  //   <div class="card-body">
  //     <h1 class="card-title" id="card-title">${inputTitle.value}</h1>
  //     <p class="card-text" id="card-text">${inputBody.value}</p>
  //   </div>
  //   <div class="card-bottom-bar">
  //     <img class="comment-img" src="assets/comment.svg" alt="comment icon"/>
  //     <p class="comment">Comment</p>
  //   </div>
  // </section>`;
  inputTitle.value = "";
  inputBody.value = "";
  if (inputTitle.value && inputBody.value) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

function disableButton() {
  if (inputTitle.value && inputBody.value) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

function deletingCard(event) {
  var cardID = parseInt(event.target.id);
  console.log(event.target)
  for (var i = 0; i < ideaListArr.length; i++) {
    if (cardID === ideaListArr[i].id) {
      ideaListArr.splice(i, 1);
      reload();
      console.log(ideaListArr);
    }
  }
}

var idea = new Idea(inputTitle.value, inputBody.value);
console.log(idea);
function addColoredStar(event) {
  var cardID = parseInt(event.target.id);
  for (var i = 0; i < ideaListArr.length; i++) {
    if (cardID === ideaListArr[i].id) {
      ideaListArr[i].updateIdea();
      console.log(ideaListArr);
    }
  }
}

// function deletingCard(event) {
//   var unwantedIdea = event.target.closest('section');
//   event.target.closest('section').remove();
//   for (var i = 0; i < ideaList.length; i++) {
//     console.log('hiii', ideaList[i].unwantedIdea);
//     if (ideaList[i].id === unwantedIdea.id) {
//       ideaList.splice(i, 1);
//       i--;
//     }
//     console.log('hello', ideaList);
//     // reload();
//   }

function reload() {
  singleCard.innerHTML = "";
  for (var i = 0; i < ideaListArr.length; i++) {
    singleCard.innerHTML += `<section class="single-card" id="single-card">
    <div class="card-top-bar">
      <img
      onclick="addColoredStar(event)"
      class="star-img"
      src="assets/star.svg"
      alt="star icon"
      id="${ideaListArr[i].id}"
      />
      <img
      onclick="deletingCard(event)"
      class="delete-img"
      src="assets/delete.svg"
      alt="delete icon"
      id="${ideaListArr[i].id}"
            />
    </div>
    <div class="card-body">
      <h1 class="card-title" id="card-title">${ideaListArr[i].title}</h1>
      <p class="card-text" id="card-text">${ideaListArr[i].body}</p>
    </div>
    <div class="card-bottom-bar">
      <img class="comment-img" src="assets/comment.svg" alt="comment icon"/>
      <p class="comment">Comment</p>
    </div>
  </section>`;
  }
}

function showStarred() {
  for (var i = 0; i < ideaListArr; i++);
  console.log(ideaListArr[i].star)
    if (ideaListArr[i].star === true) {
      singleCard.classList.add("hidden")
    }
}

//show starred Ideas
//look at each element in the array
//check if this.star is true
//if this.star is false, we want to add hidden if this.star
//account for shift in elements as we go through the array (i--)
//want to display new array in DOM
