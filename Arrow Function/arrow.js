const obj = {
  name: "Simran",

  // Arrow function
  arrowGreet: () => {
    console.log(`Arrow: Hello, ${this.name}`);
  },

  // Regular function
  normalGreet: function () {
    console.log(`Normal: Hello, ${this.name}`);
  }
};

obj.arrowGreet();     // Arrow: Hello, //this is because the arrow function have lexical scope so it tries
                           // to access the global variable or the window

obj.normalGreet();    // Normal: Hello, simran

