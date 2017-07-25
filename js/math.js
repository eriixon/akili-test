class Maths extends Akili.Component {
  constructor(...args) {
    super(...args);

    this.interval = null;
    this.scope.values = [];
    this.scope.isStarted = false;
    this.scope.start = this.start;
    this.scope.end = this.end;
  }
  
  start() {
    this.scope.isStarted = true;
    this.createValues();
    this.interval = setInterval(() => { this.createValues(); }, 1000);
  }
  
  end() {
    this.scope.isStarted = false;
    clearInterval(this.interval);
  }

  createValues() {
    this.scope.values = [];
    
    for(let i = 0; i < 5; i++) {
      this.scope.values.push({
        a: this.getRandomNumber(1, 9),
        b: this.getRandomNumber(1, 9)
      });
    }
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }  
}

// Register the component
Akili.component('maths', Maths);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => Akili.init());