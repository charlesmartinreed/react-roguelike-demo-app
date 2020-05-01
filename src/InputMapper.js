// OBSERVER PATTERN

class InputMapper {
  observers = [];

  subscribe(fn) {
    // functions tht subscribe are called when this class has an input
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  // calling the subscribed functions
  broadcast(action, data) {
    this.observers.forEach((subscriber) => subscriber(action, data));
  }

  handleInput = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      // left arrow key
      case 37:
        this.broadcast("move", { x: -1, y: 0 });
        break;
      // up arrow key
      case 38:
        this.broadcast("move", { x: 0, y: -1 });
        break;
      // right arrow key
      case 39:
        this.broadcast("move", { x: 1, y: 0 });
        break;
      // down arrow key
      case 40:
        this.broadcast("move", { x: 0, y: 1 });
        break;
      default:
        break;
    }
  };

  //   need to add event listener to document in order to facilate calling the input mapper
  bindKeys() {
    document.addEventListener("keydown", this.handleInput);
  }

  unbindKeys() {
    document.removeEventListener("keydown", this.handleInput);
  }
}

export default InputMapper;
