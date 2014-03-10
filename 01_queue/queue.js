// var Queue = function(){
//   this.queue = [];
// };

// Queue.prototype.enqueue = function(element){
//   this.queue[this.queue.length]=element;
// };
// Queue.prototype.dequeue = function(){
//   var array = []
//   this.queue.forEach(function(element){
//     if(array.length!==this.queue.length-1){
//       array[array.length] = element
//   })
//   var dequeued = this.queue - array
//   this.queue = array
//   return dequeued
// };
// Queue.prototype.size = function(){
//   return this.queue.length;
// };
// Queue.prototype.countByTraversing = function(){
//   dummy = 0
//   this.queue.forEach(function(element){
//     dummy++
//   })
//   return dummy
// }

var Queue = function(){
  this.data = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(element){
  this.data[this.tail] = element
  this.tail++
};
Queue.prototype.dequeue = function(){
  element = this.data[this.head]
  if(element){
    delete this.data[this.head];
    this.head++;
    return element;
  }
};
Queue.prototype.size = function(){
  return this.tail - this.head
};
Queue.prototype.countByTraversing = function(){
  var dummy = 0
  for(var i in this.data){
    if(this.data.hasOwnProperty(i)){
      dummy++;
    }
  }
  return dummy
};
