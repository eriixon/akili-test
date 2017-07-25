class Hello extends Akili.Component {
  constructor(el, scope) {
    super(el, scope);
    scope.hello = 'Hello Akikli World!';
  }
}

// Register the component
Akili.component('hello', Hello);



class MySecondComponent extends Hello  {
 constructor(...args) {
    super(...args);
    this.scope.example = 'Goodbye World';
  }
  myOwnMethod() {}
}

Akili.component('my-second-component', MySecondComponent)


// Initialize the application
document.addEventListener('DOMContentLoaded', () => Akili.init())