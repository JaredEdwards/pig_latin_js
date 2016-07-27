module.exports = function(word){
  if(!isVowel(word[0])){
    var consonantCluster = word.match(/[^aeiou]+/)[0]
    return word.substr(consonantCluster.length)
      + word.slice(0,consonantCluster.length)
      + "ay"
  }
  return word + "way"
}

function isVowel(letter){
  return ["a","i","e","o","u"].includes(letter)
}
