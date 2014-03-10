var LinkedList = function(){
  this.head = undefined;
  this.tail = undefined;
};

var Node = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
};

LinkedList.prototype.addToTail = function(element){
  if(!this.head){
    var node = new Node(element);
    this.tail = node;
    this.head = node;
  }
  else{
    var node = new Node(element);
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
};

LinkedList.prototype.addToHead = function(element){
  if(!this.tail){
    var node = new Node(element);
    this.tail = node;
    this.head = node;
  }
  else{
    var node = new Node(element);
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.removeHead = function(){
  if(!this.head){
    return this.head
  }
  else{
    var reference = this.head
    var value = this.head.value
    this.head = this.head.next
    if(this.head){
      this.head.previous = null;
    }
    else{
      this.head = undefined;
      this.tail = undefined;
    }
    delete reference;
    return value;
  }
};

LinkedList.prototype.removeTail = function(){
  if(!this.tail){
    return this.tail
  }
  else{
    var reference = this.tail
    var value = this.tail.value
    this.tail = this.tail.previous
    if(this.tail){
      this.tail.next = null;
    }
    else{
      this.head = undefined;
      this.tail = undefined;
    }
    delete reference;
    return value;
  }
};

LinkedList.prototype.search = function(value){
  var dummy = false
  var temporary = this.head
  while(this.head.next){
    if(this.head.value===value){
      dummy = true
    }
    this.head = this.head.next
  }
  this.head = temporary
  return dummy
};

