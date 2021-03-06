var assert = require("assert");
var Record = require("../record.js")
var Collector = require("../collector.js")

describe("Collector", function(){

  var collector1;
  var collector2;
  var record1;
  var record2;
  var record3

  beforeEach(function(){
    collector1 = new Collector("Alice");
    collector2 = new Collector("Bob");
    record1 = new Record("Prince", "Purple Rain", "Funk", 10);
    record2 = new Record("Led Zeppelin", "Led Zeppelin IV", "Rock", 20);
    record3 = new Record("Parliament", "Mothership Connection", "Funk", 75);
    record4 = new Record("AC-DC", "High Voltage", "Rock", 15);
    record5 = new Record("Swamp Dogg", "Rat On", "Funk", 20)
  });

  it("should have cash" , function(){
    assert.strictEqual(collector1.cash, 50);
  });

  it("should have cash that decreases with buying", function(){
    collector1.buy(record1);
    assert.strictEqual(collector1.collection.length, 1);
    assert.strictEqual(collector1.cash, 40);
  });

  it("should have cash that increases with selling", function(){
    collector1.buy(record1);
    collector1.buy(record2);
    collector1.sell(record2);
    assert.strictEqual(collector1.collection.length, 1);
    assert.strictEqual(collector1.cash, 40);
  })

  it("shouldn't be able to buy a Record if they can't afford it", function(){
    collector1.buy(record3);
    assert.strictEqual(collector1.collection.length, 0);
  });

  it("should be able to view the total value of their collection", function(){
    collector1.buy(record1);
    collector1.buy(record2);
    assert.strictEqual(collector1.valueOfCollection(), 30);
  });

  it("should be able to view the total value of all records of a given Genre", function(){
    collector1.buy(record1);
    collector1.buy(record2);
    collector1.buy(record4);
    assert.strictEqual(collector1.genreValue("Rock"), 35);
  });

  it("should be able to view their most valuable record", function(){
    collector1.buy(record1);
    collector1.buy(record2);
    collector1.buy(record4);
    assert.strictEqual(collector1.mostValuable(), record2);
  });

  it("should be able to sort their records by value. (ascending or descending)", function(){
    collector1.buy(record1);
    collector1.buy(record2);
    collector1.buy(record4);
    assert.deepStrictEqual(collector1.sortByValueAscending(), [record1, record4, record2]);
    assert.deepStrictEqual(collector1.sortByValueDescending(), [record2, record4, record1]);
  });

  it("should be able to compare the value of their collection with another RecordCollector", function(){
    collector1.buy(record1);
    collector1.buy(record5);
    collector2.buy(record2);
    collector2.buy(record4);
    assert.strictEqual(collector1.compare(collector2), "Alice's collection is worth £30, Bob's collection is worth £35")
  });


})
