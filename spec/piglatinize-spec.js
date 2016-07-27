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
})
