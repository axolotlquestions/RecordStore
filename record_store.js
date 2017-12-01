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
    return this.inventory.map(function(record){return record.title}).toString(" ");

    }
};



module.exports = Record_store;
