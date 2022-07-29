//Global Variables
var ideaList = [];

//Query Selectors
var saveBtn = document.querySelector("#save-btn");
var inputTitle = document.querySelector("#input-title");
var inputBody = document.querySelector("#input-body");
var cardTitle = document.querySelector("#card-title");
var cardText = document.querySelector("#card-text");
var singleCard = document.querySelector("#saved-ideas");
//Event Listerners
saveBtn.addEventListener("click", saveIdeaCard);

//Functions
function disableButton() {
  if (inputTitle.length > 0) {
    saveBtn.addClassList.remove("disabled");
  }
}

function saveIdeaCard() {
  event.preventDefault();
  var idea = new Idea(inputTitle.value, inputBody.value);
  ideaList.push(idea);
  singleCard.innerHTML += `<section class="single-card" id="single-card">
    <div class="card-top-bar">
      <img
      class="star-img"
      src="assets/star.svg"
      alt="star icon"
      />
      <img
      class="delete-img"
      src="assets/delete.svg"
      alt="delete icon"
      />
    </div>
    <div class="card-body">
      <h1 class="card-title" id="card-title">${inputTitle.value}</h1>
      <p class="card-text" id="card-text">${inputBody.value}</p>
    </div>
    <div class="card-bottom-bar">
      <img class="comment-img" src="assets/comment.svg" alt="comment icon"/>
      <p class="comment">Comment</p>
    </div>
  </section>`;
  inputTitle.value = "";
  inputBody.value = "";
}
