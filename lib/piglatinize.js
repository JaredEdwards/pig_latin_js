module.exports = function(word){
  if(!isVowel(word[0],0)){
    var consonants = ""
    for(var i = 0; i < word.length; i++){
      if(!isVowel(word[i], i)){
        consonants += word[i]
	if(word[i]=="q" && word[i+1]=="u"){
	  consonants += "u"
	  continue
	}
      } else {
        break
      }
    }
    return word.substr(consonants.length)
      + word.slice(0,consonants.length)
      + "ay"
  }
  return word + "way"
}

function isVowel(letter, index){
  if(letter === "y") return index !== 0
  return ["a","i","e","o","u"].includes(letter)
}
