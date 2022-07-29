//Global Variables
var ideaList = [];

//--------------------------------------------Query Selectors
var saveBtn = document.querySelector("#save-btn");
var inputTitle = document.querySelector("#input-title");
var inputBody = document.querySelector("#input-body");
var cardTitle = document.querySelector("#card-title");
var cardText = document.querySelector("#card-text");
var singleCard = document.querySelector("#saved-ideas");
var formSection = document.querySelector("#form-section");
var deleteCard = document.querySelector("#delete-card");

//--------------------------------------------Event Listerners
saveBtn.addEventListener("click", saveIdeaCard);
formSection.addEventListener("input", disableButton);
singleCard.addEventListener("click", deletingCard);

//----------------------------------------------Functions
function saveIdeaCard() {
  event.preventDefault();
  var idea = new Idea(inputTitle.value, inputBody.value);
  ideaList.push(idea);
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
  var id = parseInt(event.target.id);
  
  for (var i = 0; i <ideaList.length; i++) {
    console.log('hiii', ideaList[i].id);
    if (ideaList[i].id === id) {
      ideaList[i].id.splice(i, 1);
      // i--;
    }
    console.log('hello', ideaList);
    reload();
  }
}

  function reload() {
    singleCard.innerHTML = '';
    for (var i = 0; i < ideaList.length; i++) {
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
      <h1 class="card-title" id="card-title">${ideaList[i].title}</h1>
      <p class="card-text" id="card-text">${ideaList[i].body}</p>
    </div>
    <div class="card-bottom-bar">
      <img class="comment-img" src="assets/comment.svg" alt="comment icon"/>
      <p class="comment">Comment</p>
    </div>
  </section>`
     
  }

}
