var _ = require("lodash");

Collector = function(name){
  this.name = name;
  this.cash = 50;
  this.collection = [];
};

Collector.prototype = {
  buy: function(record){
    if(this.cash>record.price){
      this.cash -= record.price;
      this.collection.push(record)
    }
  },
  sell: function(record){
    this.cash += record.price;
    _.pull(this.collection, record);
  },

};

module.exports = Collector