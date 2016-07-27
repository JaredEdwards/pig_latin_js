module.exports = function(word){
  if(!isVowel(word[0])){
    var regexp = word[0] === "y" ? new RegExp(/[^aeiou]+/) : new RegExp(/[^aeiouy]+/)
    var consonantCluster = word.match(regexp)[0]
    return word.substr(consonantCluster.length)
      + word.slice(0,consonantCluster.length)
      + "ay"
  }
  return word + "way"
}

function isVowel(letter){
  return ["a","i","e","o","u"].includes(letter)
}
