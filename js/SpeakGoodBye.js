(function (window){ 
     var byeSpeaker = {};
     var speakWord = "Good Bye";

     byeSpeaker.speak = function (names) {
        console.log(speakWord + " " + names);
     }

 window.byeSpeaker = byeSpeaker;
})(window);

console.log("Good Bye John");
console.log("Good Bye Jen");
console.log("Good Bye Jason");
console.log("Good Bye Jim");
