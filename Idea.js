class Idea {
  constructor(savedTitle, savedBody) {
    this.id = Date.now();
    this.otherId = Math.floor(Math.random() * 100);
    this.title = savedTitle;
    this.body = savedBody;
    this.star = false;
  }

  updateIdea(cardID) {
    var favCard = document.getElementById(`${cardID}`);
    if (!this.star) {
      this.star = true;
      favCard.src = "assets/star-active.svg";
    } else {
      this.star = false;
      favCard.src = "assets/star.svg";
    }
  }
}
