module.exports = function(word){
  if(!isVowel(word[0])){
    return word.substr(1) + word[0] + "ay"
  }
  return word + "way"
}

function isVowel(letter){
  return ["a","i","e","o","u"].includes(letter)
}
