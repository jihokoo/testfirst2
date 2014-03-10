var Stack = function(){
  this.data = {};
  this.head = 0;
  this.tail = 0;
};

Stack.prototype.push = function(element){
  this.data[this.tail] = element
  this.tail++
}

Stack.prototype.pop = function(){
  element = this.data[this.tail-1]
  if(element){
    delete this.data[this.tail-1]
    this.tail--
    return element
  }
}

Stack.prototype.size = function(){
  return this.tail
}

Stack.prototype.auditStorage = function(){
  var size = 0
  for(var key in this.data){
    if(this.data.hasOwnProperty(key)){
      size++
    }
  }
  return size
}
