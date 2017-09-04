Objects
    > Couple of ways to define them.
        1. Object Literals
            var myObj = {
                a: 1,
                b: false,
                c: function() {
                    return a;
                }

            }
        2. Prototype - Object Constructor
            function myObj(x, y) {
                this.a = x;
                this.b = y;
            }

            var newObj = new function("foo", "bar");

'use strict';
    > Allows for more exceptions to be thrown and removes depreciated features

Prototype: All JavaScript objects inherit the properties and methods from their
      prototype. Objects created using an object literal, or with new Object(),
      inherit from a prototype called Object.prototype. Objects created with
      new Date() inherit the Date.prototype. The Object.prototype is on the top
      of the prototype chain.
