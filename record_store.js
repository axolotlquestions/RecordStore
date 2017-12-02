var _ = require("lodash");

var Record_store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;
};

Record_store.prototype = {

    add:function(record){
      this.inventory.push(record);
    },

    inventoryList: function(){
      return this.inventory.map(function(record){return record.title}).toString();
    },

    sell: function(record){
      this.balance += record.price;
      _.pull(this.inventory, record);
    },

    finances: function(){
      var stock = _.sumBy(this.inventory, function(item){
        return item.price
      });
      return "Cash = £" +this.balance + ", Stock = £" + stock;
    },

    byGenre: function(genre){
      var result = _.filter(this.inventory, function(record){
        return record.genre === genre;
      })
      return result.map(function(record){return record.title}).toString();
    }
};



module.exports = Record_store;
