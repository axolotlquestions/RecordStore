var _ = require("lodash");

Collector = function(name){
  this.name = name;
  this.cash = 50;
  this.collection = [];
};


module.exports = Collector
