var piglatinize = require("../lib/piglatinize")
describe("piglatinize", function(){
  describe("a word that starts with a vowel", function(){
    it("adds way to the end", function(){
      expect(piglatinize("egg")).toEqual("eggway")
    })
  })
  describe("a word that starts with a consonant", function(){
    it("moves the consonant to the end and adds ay", function(){
      expect(piglatinize("happy")).toEqual("appyhay")
    })
  })
  describe("a word that starts with multiple consonants", function(){
    it("moves the consonants to the end and adds ay", function(){
      expect(piglatinize("glove")).toEqual("oveglay")
    })
  })
  describe("a word with a y in it", function(){
    it("acts as a consonant if it's the first letter", function(){
      expect(piglatinize("yellow")).toEqual("ellowyay")
    })
    it("acts as a vowel if it's not the first letter", function(){
      expect(piglatinize("rhythm")).toEqual("ythmrhay")
    })
  })
  describe("a word with a u preceded by a q", function(){
    it("takes the q with it", function(){
      expect(piglatinize("queen")).toEqual("eenquay")
    })
  })
})
