var BinarySearchTree = function(number){
  this.value = number;
  this.left = undefined;
  this.right = undefined;
  this.queue = []
};

BinarySearchTree.prototype.insert = function(number){
  var branch = new BinarySearchTree(number);
  if(branch.value<this.value){
    if(!this.left){
      this.left = branch;
    }
    else{
      this.left.insert(number);
    }
  }
  else if(branch.value>this.value){
    if(!this.right){
      this.right = branch;
    }
    else{
      this.right.insert(number);
    }
  }
};

BinarySearchTree.prototype.contains = function(number){
  var containsValue = false
  if(this.value === number){
    containsValue = true
  }
  else if(this.left && this.right){
    if(this.left.value === number || this.right.value === number){
      containsValue = true
    }
    else{
      containsValue = this.right.contains(number) || this.left.contains(number)
    }
  }
  else if(this.left){
    if(this.left.value === number){
      containsValue = true
    }
    else{
      containsValue = this.left.contains(number)
    }
  }
  else if(this.right){
    if(this.right.value === number){
      containsValue = true
    }
    else{
      containsValue = this.right.contains(number)
    }
  }
  return containsValue
};



BinarySearchTree.prototype.depthFirstMap = function(func){
  if(this.left){
    func(this.value)
    this.left.depthFirstMap(func)
    if(this.right){
      this.right.depthFirstMap(func)
    }
  }
  else if(this.right){
    func(this.value)
    this.right.depthFirstMap(func)
    if(this.left){
      this.right.depthFirstMap(func)
    }
  }
  else{
    func(this.value)
  }
};
//the idea is check left until you can't, check right, then left, until you can't,
//go up one, check right until you can't, go up one

BinarySearchTree.prototype.breadthFirstMap = function(func){
  var forEach = function(array, func){
    for(var i = 0; i < array.length; i++){
      func(array[i])
    }
  }
  var queue = []
  if(this.value === 20){
    func(this.value)
    queue.push(this.left)
    queue.push(this.right)
  }
  else if(this.left&&this.right){
    queue.push(this.left)
    queue.push(this.right)
    return queue
  }
  else if(this.left){
    queue.push(this.left)
    return queue
  }
  else if(this.right){
    queue.push(this.right)
    return queue
  }
  else{
    return queue
  }
  while(queue.length > 0){
    queue.forEach(function(element){
      func(element.value)
      var queue2 = queue.concat(element.breadthFirstMap(func))
      queue2.reverse().pop()
      queue2.reverse()
      queue = queue2
    })
  }
}


BinarySearchTree.prototype.size = function(){
  var counter = 1;
  if(this.left){
    counter += + this.left.size();
    if(this.right){
      counter = counter + this.right.size();
    }
    // temporary = this.left;
    // this.left = this.left.left;
    // this.left || counter += this.size();
    // this.left = temporary;
  }
  if(this.right){
    counter = counter + this.right.size();
    if(this.left){
      counter = counter + this.left.size();
    }
    // temporary = this.right
    // this.right = this.right.right
    // this.right || counter += this.size();
    // this.right = temporary
  }
  return counter;
};

