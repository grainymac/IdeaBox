class Idea {
  constructor(savedTitle, savedBody) {
    this.id = Date.now();
    this.title = savedTitle;
    this.body = savedBody;
    this.star = false;
  }

  updateIdea() {
    var favCard = document.querySelector(".star-img");
    if (this.star === false) {
      this.star = true;
      favCard.src = "assets/star-active.svg";
    } else {
      this.star = false;
      favCard.src = "assets/star.svg";
    }
  }
}
