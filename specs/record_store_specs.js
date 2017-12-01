var assert = require("assert");
var Record_store = require("../record_store.js")

describe("Record Store", function(){

  var record_store

  beforeEach(function(){
    record_store = new Record_store("Big Al's Music Emporium", "Glasgow")
  })

  it("should have a name", function(){
    assert.strictEqual(record_store.name, "Big Al's Music Emporium")
  });
  it("should have a city");
  it("should start with an empty inventory");

})
