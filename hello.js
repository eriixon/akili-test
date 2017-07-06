class Hello extends Akili.Component {
  constructor(el, scope) {
    super(el, scope);
    scope.hello = 'Hello Akikli World!';
  }
}

// Register the component
Akili.component('hello', Hello);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  Akili.init();
})