var BinarySearchTree = function(val){
  this.value = val;
  this.depth = 0;
};

BinarySearchTree.prototype.insert = function(val){
  if (this.value === val) {return;}
  if (val < this.value && !this.left) {this.left = new BinarySearchTree(val); this.left.parent = this;}
  if (val < this.value && this.left) {this.left.insert(val); this.depth++;}
  if (val > this.value && !this.right) {this.right = new BinarySearchTree(val); this.right.parent = this;}
  if (val > this.value && this.right) {this.right.insert(val); this.depth++}
};

BinarySearchTree.prototype.contains = function(val){
  if (this.value === val) {return true;}
  if (val < this.value && !this.left) {return false;}
  if (val < this.value && this.left) {return this.left.contains(val);}
  if (val > this.value && !this.right) {return false;}
  if (val > this.value && this.right) {return this.right.contains(val);}
};

BinarySearchTree.prototype.depthFirstMap = function(func){
  // calls func on each value in a tree depth first
  func(this.value);
  this.left && this.left.depthFirstMap(func);
  this.right && this.right.depthFirstMap(func);
};

BinarySearchTree.prototype.breadthFirstMap = function(func, kids){
  kids = kids || [this];
  kids.forEach(function(val){
    func(val.value);
  });
  var gkids = [];
  kids.forEach(function(val){
    val.left && gkids.push(val.left);
    val.right && gkids.push(val.right);
  });
  gkids.length > 0 && this.breadthFirstMap(func, gkids);
};

BinarySearchTree.prototype.size = function () {
  var size = 0;
  this.depthFirstMap(function (val) {
    size++;
  })
  return size;
};
