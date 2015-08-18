function piglatinize(word){
  var vowels = ["a", "e", "i", "o", "u"];
  if(vowels.indexOf(word[0]) > -1 || (/^.*y/).test(word)){
    word = word + "hay";
  }else
  if(/^s?qu/.test(word)){
    word = word.replace(/^s?qu/, "") + word.match(/^s?qu/)[0] + "ay";
  }else{
    word = word.substring(1) + word[0] + "ay";
  }
  return word;
}

$(document).ready(function(){
  var nose = $("#nose");
  var mouth = $("#mouth");
  nose.on("click", function(){
    var word = mouth.val();
    mouth.val(piglatinize(word));
  });
});
