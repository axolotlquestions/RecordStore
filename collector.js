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

  valueOfCollection: function(){
     return _.sumBy(this.collection, function(record){
      return record.price;
    });
  },

  genreValue: function(genre){
    var result = _.filter(this.collection, function(record){
      return record.genre === genre;
    })
    return _.sumBy(result, function(record){
      return record.price;
    })
  },

  mostValuable: function(){
    return _.maxBy(this.collection, "price");
  },

  sortByValueAscending: function(){
    return _.sortBy(this.collection, "price");
  },

  sortByValueDescending: function(){
    return _.sortBy(this.collection, "price").reverse();
  },

  compare: function(collector){
    return this.name + "'s collection is worth £" + this.valueOfCollection() + ", " + collector.name + "'s collection is worth £" + collector.valueOfCollection()
  }

};

module.exports = Collector
