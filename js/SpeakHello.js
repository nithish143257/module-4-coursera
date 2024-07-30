(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

 helloSpeaker.speak = function (names) {
   console.log(speakWord + " " + names);
 }
       window.helloSpeaker = helloSpeaker;
})(window);

console.log("Hello Yaakov");
console.log("Hello Paul");
console.log("Hello Frank");
console.log("Hello Larry");
console.log("Hello Paula");
console.log("Hello Laura");
