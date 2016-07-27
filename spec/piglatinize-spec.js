var piglatinize = require("../lib/piglatinize")
describe("piglatinize", function(){
  describe("a word that starts with a vowel", function(){
    it("adds way to the end", function(){
      expect(piglatinize("egg")).toEqual("eggway")
    })
  })
})
