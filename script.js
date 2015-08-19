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

function speak(word, voiceName){
  // see: https://developers.google.com/web/updates/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API
  voiceName = typeof voiceName !== 'undefined' ? voiceName : "Ralph";
  if ('speechSynthesis' in window) {
 // Synthesis support. Make your web apps talk!
   var msg = new SpeechSynthesisUtterance(word);
   msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceName; })[0];
   window.speechSynthesis.speak(msg);
  }
}

$(document).ready(function(){
  var nose = $("#nose");
  var mouth = $("#mouth");
  nose.on("click", function(){
    var word = mouth.val();
    translated = piglatinize(word);
    mouth.val(translated);
    speak(translated, "Moira");
  });
});
