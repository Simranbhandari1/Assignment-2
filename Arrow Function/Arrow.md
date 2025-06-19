# Arrow Function vs Regular Function in JavaScript

This simple JavaScript example demonstrates the difference in how **arrow functions** and **regular functions** handle the `this` keyword inside an object.

---

## Objective

To understand how `this` behaves differently in:
- **Arrow functions** (lexical `this`)
- **Regular functions** (dynamic `this` bound to the calling object)

---

## 💻 Code Example

```js
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

obj.arrowGreet();     // Output: Arrow: Hello, undefined
obj.normalGreet();    // Output: Normal: Hello, Simran
