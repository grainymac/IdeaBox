//Global Variables
var ideaListArr = [];

//--------------------------------------------Query Selectors
var saveBtn = document.querySelector("#save-btn");
var titleField = document.querySelector("#title-field");
var textField = document.querySelector("#text-field");
var savedIdeas = document.querySelector("#saved-ideas");
var formSection = document.querySelector("#form-section");
var deleteCard = document.querySelector("#delete-card");
var starredBtn = document.querySelector("#starred-btn");

//--------------------------------------------Event Listerners
saveBtn.addEventListener("click", saveIdeaCard);
formSection.addEventListener("input", enableButton);

//----------------------------------------------Functions
function saveIdeaCard(event) {
  event.preventDefault();
  var idea = new Idea(titleField.value, textField.value);
  ideaListArr.push(idea);
  reload();
  titleField.value = "";
  textField.value = "";
  enableButton();
}

function enableButton() {
  if (titleField.value && textField.value) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

function deletingCard(event) {
  var cardID = parseInt(event.target.id);
  for (var i = 0; i < ideaListArr.length; i++) {
    if (cardID === ideaListArr[i].id) {
      ideaListArr.splice(i, 1);
      reload();
    }
  }
}

function addColoredStar(event) {
  var cardID = parseInt(event.target.id);
  for (var i = 0; i < ideaListArr.length; i++) {
    if (cardID === ideaListArr[i].otherId) {
      ideaListArr[i].updateIdea(cardID);
    }
  }
}

function reload() {
  savedIdeas.innerHTML = "";
  var srcStar = "assets/star.svg";
  for (var i = 0; i < ideaListArr.length; i++) {
    if (ideaListArr[i].star) {
      srcStar = "assets/star-active.svg";
    } else {
      srcStar = "assets/star.svg";
    }
    savedIdeas.innerHTML += `<section class="single-card">
    <div class="card-top-bar">
      <img
      onclick="addColoredStar(event)"
      class="star-img"
      src="${srcStar}"
      alt="star icon"
      id="${ideaListArr[i].otherId}"
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
