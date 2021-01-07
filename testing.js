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




class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let currentNode = this;
		while (true){
			if (value < currentNode.value){
				if (currentNode.left == null){
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left
				}
			} else {
				if (!currentNode.left){
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
		while (currentNode){
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
		let currentNode = this;
		while (currentNode){
			if (value < currentNode.value){
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value){
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				if (currentNode.left && currentNode.right){
					currentNode.value = currentNode.right.getMinValue();
					currentNode.right.remove(currentNode.value, currentNode)
				}else if (!parentNode){
					if (currentNode.left){
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if (currentNode.right){
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left
						currentNode.right = currentNode.right.right;
					} else {
						//single Node tree
					}
				}else if (parentNode.left == currentNode){
					parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
				}else if (parentNode.right == currentNode){
					parentNode.right = currentNode.right ? currentNode.left : currentNode.right;
				}
				break;
			}
		}
    return this;
  }
	
	getMinValue(){
		let currentNode = this;
		while (currentNode.left){
			currentNode = currentNode.left
		}
		return currentNode.value;
	}
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
		let currentNode = this;
		while (currentNode){
			if (currentNode.value > value){
				//left
				if (!currentNode.left){
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left
				}
			} else {
				//right
				if (!currentNode.right){
					currentNode.right = new BST(value);
					break;
				} else {
					currentNode = currentNode.right
				}
			}
		}
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
		let currentNode = this;
		while (currentNode){
			if (value < currentNode.value){
				currentNode = currentNode.left
			} else if (value > currentNode.value){
				currentNode = currentNode.right
			} else {
				return true
			}
		}
		return false
  }

  remove(value, parentNode = null) {
    // Write your code here.
		let currentNode = this;
		while (currentNode){
			if (currentNode.value > value){
				parentNode = currentNode;
				currentNode = currentNode.left
			} else if (currentNode.value < value){
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				if (currentNode.left && currentNode.right){
					currentNode.value = currentNode.right.getLeastValue();
					currentNode.right.remove(currentNode.value, currentNode)
				} else if (!parentNode){
					if (currentNode.left){
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if (currentNode.right){
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						//single node tree
					}
				} else if (parentNode.left == currentNode){
					parentNode.left = currentNode.left ? currentNode.left : currentNode.right
				} else if (parentNode.right == currentNode){
					parentNode.right = currentNode.left ? currentNode.left : currentNode.right
				}
				break;
			}
		}
    // Do not edit the return statement of this method.
    return this;
  }

	getLeastValue(){
		let currentNode = this;
		while (currentNode.left){
			currentNode = currentNode.left
		}
		return currentNode.value
	}
}


function longestPeak(array) {
  // Write your code here.
	let longestLength = 0;
	for (let i = 1; i < array.length - 1; i++){
		const isPeak = (array[i - 1] < array[i] && array[i] > array[i + 1]);
		if (isPeak){
			let peakStartIdx = i - 1;
			let peakEndIdx = i + 1;
			while ( array[peakStartIdx] > array[peakStartIdx - 1])peakStartIdx--;
			while ( array[peakEndIdx] > array[peakEndIdx + 1])peakEndIdx++;
			const currentPeakLength = peakEndIdx - peakStartIdx + 1;
			if (currentPeakLength > longestLength) longestLength = currentPeakLength;
		}
	}
	return longestLength;
}

function isMonotonic(array) {
  // Write your code here.
	let increaseMono = true;
	let decreaseMono = true;
	for (let i = 1; i < array.length; i++){
		if (array[i-1] > array[i]) increaseMono = false;
		if (array[i-1] < array[i]) decreaseMono = false;
	}
	return increaseMono || decreaseMono
}