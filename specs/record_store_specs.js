var assert = require("assert");
var Record_store = require("../record_store.js")
var Record = require("../record.js")

describe("Record Store", function(){

  var record_store;
  var record1;
  var record2;

  beforeEach(function(){
    record_store = new Record_store("Big Al's Music Emporium", "Glasgow");
    record1 = new Record("Prince", "Purple Rain", "Funk", 10);
    record2 = new Record("Led Zeppelin", "Led Zeppelin IV", "Rock", 20);
  })

  it("should have a name", function(){
    assert.strictEqual(record_store.name, "Big Al's Music Emporium");
  });

  it("should have a city", function(){
    assert.strictEqual(record_store.city, "Glasgow");
  });

  it("should start with an empty inventory", function(){
    assert.strictEqual(record_store.inventory.length, 0)
  });

  it("should have a balance", function(){
    assert.strictEqual(record_store.balance, 100)
  });

  it("should be able to add a record to its inventory", function(){
    record_store.add(record1);
    assert.strictEqual(record_store.inventory.length, 1);
  });

  it("should be able to list its inventory", function(){
    record_store.add(record1);
    record_store.add(record2);
    assert.strictEqual(record_store.inventoryList(), "Purple Rain,Led Zeppelin IV" )
  });

  it("should be able to sell a record", function(){
    record_store.add(record1);
    record_store.add(record2);
    record_store.sell(record2)
    assert.strictEqual(record_store.inventory.length, 1);
    assert.strictEqual(record_store.balance, 120);
  });

  it("should have a method that reports on its financial situation", function(){
    record_store.add(record1);
    record_store.add(record2);
    assert.strictEqual(record_store.finances(), "Cash = £100, Stock = £30")
    record_store.sell(record1);
    assert.strictEqual(record_store.finances(), "Cash = £110, Stock = £20")
  });

  it("should be able to filter stock by genre", function(){
    record_store.add(record1);
    record_store.add(record2);
    assert.strictEqual(record_store.byGenre("Funk"), "Purple Rain")
    assert.strictEqual(record_store.byGenre("Rock"), "Led Zeppelin IV")
  })

})
