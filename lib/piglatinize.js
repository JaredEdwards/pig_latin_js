module.exports = function(word){
  if(!isVowel(word[0])){
    var consonantCluster = ""
    for(var i = 0; i < word.length; i++){
      if(!isVowel(word[i])){
        consonantCluster += word[i]
      }else{
        break
      }
    }
    return word.substr(consonantCluster.length) + word.slice(0,consonantCluster.length) + "ay"
  }
  return word + "way"
}

function isVowel(letter){
  return ["a","i","e","o","u"].includes(letter)
}
