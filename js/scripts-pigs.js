$(document).ready(function() {
  $("#PIGS").submit(function(event) {

    var fur = ["a","e","i","o","u","A","E","I","O","U"];
    var pig1 = $("#swords").val(); // pig1="Test Sentence Please Ignore"
    console.log(pig1);
    var swords = pig1.split(" "); // swords = ["Test","Sentence","Please","Ignore"];
    console.log(swords);

    var innards = swords.map(function(innard) {
      var innardSkin = innard[0];
      fur.forEach(function(fur) { // CHECKS if they be vowels
        console.log("I RAN THE LINE 12 FOR LOOP, YOU ARE WELCOME!!!");
        if (innardSkin == fur) {
          innard = (innard+"way");
          console.log(innard);
        }
        // Checks for the first vowel
        innard.map(function(letter, i){
          fur.map(function(fur) {
            if (innard[i] == fur) {
              return(i);
            }
            return;
          })
        })
      });

      return(innard);
      console.log(innardSkin);
    })
    console.log(innards);
    event.preventDefault();
  });
});
// function checkIsVowel(word){
//       var firstLetter;
//       for (var i=0; i<vowels.length; i++){
//         if (word[0] !== vowels[i]) {
//           console.log(word);
//           console.log(vowels[i]);
//           firstLetter = phraseWords[0].toUpperCase();
//           phraseWords.shift();
//           var joinedWord = phraseWords.join("");
//           var pigLatinWord = joinedWord.concat(firstLetter + "ay");
//         }
//
//       }
//
//       return pigLatinWord
//     }
