var assert = require ("assert");
var Record = require ("../record.js");

describe("Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Prince", "Purple Rain", "Funk", 10);
  });

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Prince");
  });
  it("should have a title", function(){
    assert.strictEqual(record.title, "Purple Rain");
  });
  it("should have a genre");
  it("should have a price");



})
