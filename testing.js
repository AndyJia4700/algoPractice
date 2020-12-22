class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let currentNode= this;
		while (true){
			if (value < currentNode){
				if (currentNode.left == null){
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left
				}
			} else {
				if (currentNode.left == null){
					currentNode.right = new BST(value);
					break;
				} else{
					currentNode = currentNode.right
				}
			}
		}
    return this;
  }

  contains(value) {
		let currentNode = this;
		while (currentNode !== null){
			if (value < currentNode.value){
				currentNode = currentNode.left;
			} else if (value > currentNode.value){
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}
		return false;
  }

  remove(value, parentNode = null) {
    // Write your code here.
		let currentNode = this;
		while ( currentNode){
			if (value < currentNode.value){
				parentNode = currentNode;
				currentNode = currentNode.left
			}
		}
    return this;
  }
}



function arrayOfProducts(array) {
  // Write your code here.
	let products = new Array(array.length).fill(1);
	//[2,3,4,5]
	let leftRunningProduct = 1;
	for (let i = 0; i < array.length; i++){
		products[i] = leftRunningProduct;
		leftRunningProduct *= array[i]
	}
	
	let rightRunningProduct = 1;
	for (let i = array.length - 1; i >= 0; i--){
		products[i] *= rightRunningProduct;
		rightRunningProduct *= array[i]
	}
	
	return products;
}
