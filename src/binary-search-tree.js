const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data){
    if (data < this.data){
      if (this.left == null){
        this.left = new Node(data);
      }
      else this.left.add(data);
    }
    else {
      if (this.right == null){
        this.right = new Node(data);
      }
      else this.right.add(data);
    }
  }

  remove(data){
    if (data > this.data){
      if (this.right != null){
        if (this.right.data == data && this.right.left == null && this.right.right == null){
          this.right = null;
        }
        else {
          this.right.remove(data);
        }
      }
    }
    else if (data < this.data){
      if (this.left != null){
        if (this.left.data == data && this.left.left == null && this.left.right == null){
          this.left = null;
        }
        else {
          this.left.remove(data);
        }
      }
    }
    else {
      if (this.left == null){
        this.data = this.right.data;
        this.left = this.right.left;
        this.right = this.right.right;
      }
      else if (this.right == null){
        this.data = this.left.data;
        this.right = this.left.right;
        this.left = this.left.left;
      }
      else if (this.right.left == null){
        this.data = this.right.data;
        this.right = this.right.right;
      }
      else {
        let min = this.right.min();
        this.data = min;
        this.right.remove(min);
      }
    }
  }

  find(data){
    if (this.data == data){
      return this;
    }
    if (data < this.data && this.left){
      return this.left.find(data);
    }
    else if (data > this.data && this.right){
      return this.right.find(data);
    }
    else {
      return null;
    }
  }

  min(){
    if (this.left == null){
      return this.data;
    }
    return this.left.min();
  }

  max(){
    if (this.right == null){
      return this.data;
    }
    return this.right.max();
  }
}

class BinarySearchTree {

  r;

  root() {
    return this.r ? this.r : null;
  }

  add(data) {
    if (!this.r){
      this.r = new Node(data, null, null);
    }
    else{
      if (this.has(data)){
        return;
      }
      this.r.add(data);
    }
  }

  has(data) {
    return this.find(data) == null ? false : true;
  }

  find(data) {
    if (!this.r){
      return null;
    }
    return this.r.find(data);
  }

  remove(data) {
    if (this.r){
      if (this.r.left == null && this.r.right == null){
        if (this.data == data){
          this.r == null;
        }
      }
      else this.r.remove(data);
    }
  }

  min() {
    if (!this.r){
      return null;
    }
    return this.r.min();
  }

  max() {
    if (!this.r){
      return null;
    }
    return this.r.max();
  }
}

module.exports = {
  BinarySearchTree
};