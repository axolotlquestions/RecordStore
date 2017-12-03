var assert = require("assert");
var Record = require("../record.js")
var Collector = require("../collector.js")

describe("Collector", function(){

  var collector1;
  var record1;
  var record2;

  beforeEach(function(){
    collector1 = new Collector("Alice");
    record1 = new Record("Prince", "Purple Rain", "Funk", 10);
    record2 = new Record("Led Zeppelin", "Led Zeppelin IV", "Rock", 20);
  })

  it("should have cash that increase and decreases with buying and selling");
  it("shouldn't be able to buy a Record if they can't afford it");
  it("should be able to view the total value of their collection");
  it("should be able to view the total value of all records of a given Genre");
  it("should be able to view their most valuable record");
  it("should be able to sort their records by value. (ascending or descending)");
  it("should be able to compare the value of their collection with another RecordCollector");


})
