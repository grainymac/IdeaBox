//Global Variables
var ideaList = [];


//Query Selectors
var saveBtn = document.querySelector("#save-btn");
var inputTitle = document.querySelector("#input-title");
var inputBody = document.querySelector("#input-body");
var cardTitle = document.querySelector("#card-title");
var cardText = document.querySelector("#card-text");

//Event Listerners
saveBtn.eventListener("click", saveIdeaCard);

//Functions
function saveIdeaCard() {
  var idea = new Idea(inputTitle.value, inputBody.value);
}
