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

  it("should have a genre", function(){
    assert.strictEqual(record.genre, "Funk");
  });

  it("should have a price", function(){
    assert.strictEqual(record.price, 10);
  });

  it("should be able to print out its properties as a string",function(){
    assert.strictEqual(record.propertyString(), "Artist: Prince, Title: Purple Rain, Genre: Funk, Price: £10")
  });



})
