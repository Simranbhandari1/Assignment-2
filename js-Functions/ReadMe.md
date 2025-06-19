# 📘 JavaScript Functions Deep Dive with Outputs

This README provides a comprehensive overview of JavaScript function types and behaviors — including declarations, expressions, hoisting, IIFE, arrow functions, and more, along with example outputs.

---

## 🧠 Table of Contents

1. [Function Statement / Declaration](#1-function-statement--declaration)
2. [Function Expression](#2-function-expression)
3. [Anonymous Functions](#3-anonymous-functions)
4. [Named Function Expression](#4-named-function-expression)
5. [Parameters vs Arguments](#5-parameters-vs-arguments)
6. [First-Class Functions](#6-first-class-functions)
7. [Immediately Invoked Function Expression (IIFE)](#7-immediately-invoked-function-expression-iife)
8. [Arrow Functions](#8-arrow-functions)
9. [Arrow vs Regular Functions](#9-arrow-vs-regular-functions)
10. [Higher-Order Functions](#10-higher-order-functions)

---

## 1. Function Statement / Declaration

```javascript
let a = 1;
let b = 10;

function fun1() {
  return a + b;
}

console.log("Sum is", fun1());
```

**Output:**
```
Sum is 11
```

---

## 2. Function Expression

```javascript
var func = function () {
  console.log("Welcome To Javascript");
};

func();
```

**Output:**
```
Welcome To Javascript
```

---

## 3. Anonymous Functions

```javascript
// SyntaxError if used alone without assigning
// Used like:
var greet = function () {
  console.log("Hello from anonymous!");
};
greet();
```

**Output:**
```
Hello from anonymous!
```

---

## 4. Named Function Expression

```javascript
var x = function yz() {
  console.log(yz); // logs the function definition
};

x();
```

**Output:**
```
[Function: yz]
```

---

## 5. Parameters vs Arguments

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Simran");
```

**Output:**
```
Hello, Simran
```

---

## 6. First-Class Functions

```javascript
var k = function (para1) {
  console.log(para1);
};

k(function () {
  console.log("hello world");
});
```

**Output:**
```
[Function (anonymous)]
hello world
```

```javascript
var fun = function () {
  return function () {
    console.log("welcome");
  };
};

const returnedFunc = fun();
returnedFunc();
```

**Output:**
```
welcome
```

---

## 7. Immediately Invoked Function Expression (IIFE)

```javascript
(function fun() {
  console.log("This is an IIFE");
})();
```

**Output:**
```
This is an IIFE
```

---

## 8. Arrow Functions

```javascript
const sayHello = () => {
  console.log("Welcome");
};
sayHello();

const add = (j, k) => {
  return j + k;
};
console.log(add(1, 1));

const sub = (a, b) => a - b;
console.log(sub(2, 1));

const addition = (...nums) => {
  console.log(nums);
};
addition(2, 4, 8, 10);
```

**Output:**
```
Welcome
2
1
[ 2, 4, 8, 10 ]
```

---

## 9. Arrow vs Regular Functions

```javascript
function f() {
  console.log(arguments);
}
f(1, 2, 3);

const obj = {
  value: 20,
  myFunc: () => {
    console.log("Value is " + this.value); // undefined
  },
  myFunction: function () {
    console.log("Value is " + this.value); // 20
  },
};

obj.myFunc();
obj.myFunction();
```

**Output:**
```
[Arguments] { '0': 1, '1': 2, '2': 3 }
Value is undefined
Value is 20
```

---

## 10. Higher-Order Functions

```javascript
function multiply(a, b, cb) {
  let result = a * b;
  cb(result);
}

multiply(12, 1, function (val) {
  console.log(val);
});

function divide(a, b, cb) {
  let result = a / b;
  cb(result);
  return () => console.log(result);
}

let resultFunction = divide(100, 25, () => {});
resultFunction();
```

**Output:**
```
12
4
```

---

## 11. Closures

```js
console.log("**Example of Closure Function**");

function main() {
  const place = "Agra";
  function innerFunction() {
    console.log(place);
  }
  innerFunction();
}

main();

console.log("**Another Example of Closure Function**");

function add(first) {
  function innerFunction(second) {
    let res = first + second;
    console.log("Answer is", res);
  }
  return innerFunction;
}

const result = add(1);
result(10);
```

**Output:**

```
**Example of Closure Function**
Agra
**Another Example of Closure Function**
Answer is 11
```

---