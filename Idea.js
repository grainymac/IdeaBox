class Idea {
  constructor(savedTitle, savedBody) {
    this.id = Date.now();
    this.title = savedTitle;
    this.body = savedBody;
    this.star = false;
  }

  updateIdea() {}
}
