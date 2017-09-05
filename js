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

Convert object to jSON
    > var myJSON = JSON.stringify(myObj);


Prototype: All JavaScript objects inherit the properties and methods from their
      prototype. Objects created using an object literal, or with new Object(),
      inherit from a prototype called Object.prototype. Objects created with
      new Date() inherit the Date.prototype. The Object.prototype is on the top
      of the prototype chain.

      An example of adding behavior to the prototype so that the last element
        in the array is returned:
        var arr = [4, 5, 88, 9, 123];
        Object.defineProperty(Array.prototype, 'last', { get: function(){
          return this[this.length - 1];
        }});
        console.log(arr.last);
CSS: http://learn.shayhowe.com/html-css/positioning-content/
