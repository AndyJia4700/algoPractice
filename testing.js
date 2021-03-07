// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
// 		let currentNode= this;
// 		while (true){
// 			if (value < currentNode){
// 				if (currentNode.left == null){
// 					currentNode.left = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.left
// 				}
// 			} else {
// 				if (currentNode.left == null){
// 					currentNode.right = new BST(value);
// 					break;
// 				} else{
// 					currentNode = currentNode.right
// 				}
// 			}
// 		}
//     return this;
//   }

//   contains(value) {
// 		let currentNode = this;
// 		while (currentNode !== null){
// 			if (value < currentNode.value){
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value){
// 				currentNode = currentNode.right;
// 			} else {
// 				return true;
// 			}
// 		}
// 		return false;
//   }

//   remove(value, parentNode = null) {
//     // Write your code here.
// 		let currentNode = this;
// 		while ( currentNode){
// 			if (value < currentNode.value){
// 				parentNode = currentNode;
// 				currentNode = currentNode.left
// 			}
// 		}
//     return this;
//   }
// }



// function arrayOfProducts(array) {
//   // Write your code here.
// 	let products = new Array(array.length).fill(1);
// 	//[2,3,4,5]
// 	let leftRunningProduct = 1;
// 	for (let i = 0; i < array.length; i++){
// 		products[i] = leftRunningProduct;
// 		leftRunningProduct *= array[i]
// 	}
	
// 	let rightRunningProduct = 1;
// 	for (let i = array.length - 1; i >= 0; i--){
// 		products[i] *= rightRunningProduct;
// 		rightRunningProduct *= array[i]
// 	}
	
// 	return products;
// }




// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
// 		let currentNode = this;
// 		while (true){
// 			if (value < currentNode.value){
// 				if (currentNode.left == null){
// 					currentNode.left = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.left
// 				}
// 			} else {
// 				if (!currentNode.left){
// 					currentNode.right = new BST(value);
// 					break;
// 				} else{
// 					currentNode = currentNode.right
// 				}
// 			}
// 		}
//     return this;
//   }

//   contains(value) {
// 		let currentNode = this;
// 		while (currentNode){
// 			if (value < currentNode.value){
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value){
// 				currentNode = currentNode.right;
// 			} else {
// 				return true;
// 			}
// 		}
// 		return false;
//   }

//   remove(value, parentNode = null) {
// 		let currentNode = this;
// 		while (currentNode){
// 			if (value < currentNode.value){
// 				parentNode = currentNode;
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value){
// 				parentNode = currentNode;
// 				currentNode = currentNode.right;
// 			} else {
// 				if (currentNode.left && currentNode.right){
// 					currentNode.value = currentNode.right.getMinValue();
// 					currentNode.right.remove(currentNode.value, currentNode)
// 				}else if (!parentNode){
// 					if (currentNode.left){
// 						currentNode.value = currentNode.left.value;
// 						currentNode.right = currentNode.left.right;
// 						currentNode.left = currentNode.left.left;
// 					} else if (currentNode.right){
// 						currentNode.value = currentNode.right.value;
// 						currentNode.left = currentNode.right.left
// 						currentNode.right = currentNode.right.right;
// 					} else {
// 						//single Node tree
// 					}
// 				}else if (parentNode.left == currentNode){
// 					parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
// 				}else if (parentNode.right == currentNode){
// 					parentNode.right = currentNode.right ? currentNode.left : currentNode.right;
// 				}
// 				break;
// 			}
// 		}
//     return this;
//   }
	
// 	getMinValue(){
// 		let currentNode = this;
// 		while (currentNode.left){
// 			currentNode = currentNode.left
// 		}
// 		return currentNode.value;
// 	}
// }


// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     // Write your code here.
// 		let currentNode = this;
// 		while (currentNode){
// 			if (currentNode.value > value){
// 				//left
// 				if (!currentNode.left){
// 					currentNode.left = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.left
// 				}
// 			} else {
// 				//right
// 				if (!currentNode.right){
// 					currentNode.right = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.right
// 				}
// 			}
// 		}
//     // Do not edit the return statement of this method.
//     return this;
//   }

//   contains(value) {
//     // Write your code here.
// 		let currentNode = this;
// 		while (currentNode){
// 			if (value < currentNode.value){
// 				currentNode = currentNode.left
// 			} else if (value > currentNode.value){
// 				currentNode = currentNode.right
// 			} else {
// 				return true
// 			}
// 		}
// 		return false
//   }

//   remove(value, parentNode = null) {
//     // Write your code here.
// 		let currentNode = this;
// 		while (currentNode){
// 			if (currentNode.value > value){
// 				parentNode = currentNode;
// 				currentNode = currentNode.left
// 			} else if (currentNode.value < value){
// 				parentNode = currentNode;
// 				currentNode = currentNode.right;
// 			} else {
// 				if (currentNode.left && currentNode.right){
// 					currentNode.value = currentNode.right.getLeastValue();
// 					currentNode.right.remove(currentNode.value, currentNode)
// 				} else if (!parentNode){
// 					if (currentNode.left){
// 						currentNode.value = currentNode.left.value;
// 						currentNode.right = currentNode.left.right;
// 						currentNode.left = currentNode.left.left;
// 					} else if (currentNode.right){
// 						currentNode.value = currentNode.right.value;
// 						currentNode.left = currentNode.right.left;
// 						currentNode.right = currentNode.right.right;
// 					} else {
// 						//single node tree
// 					}
// 				} else if (parentNode.left == currentNode){
// 					parentNode.left = currentNode.left ? currentNode.left : currentNode.right
// 				} else if (parentNode.right == currentNode){
// 					parentNode.right = currentNode.left ? currentNode.left : currentNode.right
// 				}
// 				break;
// 			}
// 		}
//     // Do not edit the return statement of this method.
//     return this;
//   }

// 	getLeastValue(){
// 		let currentNode = this;
// 		while (currentNode.left){
// 			currentNode = currentNode.left
// 		}
// 		return currentNode.value
// 	}
// }


// function longestPeak(array) {
//   // Write your code here.
// 	let longestLength = 0;
// 	for (let i = 1; i < array.length - 1; i++){
// 		const isPeak = (array[i - 1] < array[i] && array[i] > array[i + 1]);
// 		if (isPeak){
// 			let peakStartIdx = i - 1;
// 			let peakEndIdx = i + 1;
// 			while ( array[peakStartIdx] > array[peakStartIdx - 1])peakStartIdx--;
// 			while ( array[peakEndIdx] > array[peakEndIdx + 1])peakEndIdx++;
// 			const currentPeakLength = peakEndIdx - peakStartIdx + 1;
// 			if (currentPeakLength > longestLength) longestLength = currentPeakLength;
// 		}
// 	}
// 	return longestLength;
// }

// function isMonotonic(array) {
//   // Write your code here.
// 	let increaseMono = true;
// 	let decreaseMono = true;
// 	for (let i = 1; i < array.length; i++){
// 		if (array[i-1] > array[i]) increaseMono = false;
// 		if (array[i-1] < array[i]) decreaseMono = false;
// 	}
// 	return increaseMono || decreaseMono
// }

// function smallestDifference(arrayOne, arrayTwo) {
//   // Write your code here.
// 	arrayOne.sort((a,b)=>a-b);
// 	arrayTwo.sort((a,b)=>a-b);
// 	let i = 0;
// 	let j = 0;
// 	let pair = [];
// 	let currentNum = Infinity;
// 	let smallest = Infinity;
// 	while (i<arrayOne.length && j<arrayTwo.length){
// 		let firstNum = arrayOne[i];
// 		let secondNum = arrayTwo[j];
		
// 		if (firstNum == secondNum){
// 			return [firstNum, secondNum]
// 		} else if (firstNum < secondNum){
// 			currentNum = secondNum - firstNum;
// 			i++;
// 		} else if (firstNum > secondNum){
// 			currentNum = firstNum - secondNum;
// 			j++;
// 		}
		
// 		if (currentNum < smallest){
// 			smallest = currentNum;
// 			pair = [firstNum, secondNum]
// 		}
// 	}
// 	return pair;
// }

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function validateBst(tree, left = -Infinity, right = Infinity) {
//   // Write your code here.
// 	if (!tree) return true;
// 	while(tree){
// 		if (tree.value > tree.left.value){
// 			left = tree.value;
// 			validateBst(tree.left, left, right)
// 		} else if (tree.value <= tree.right.value) {
// 			right = tree.value;
// 			validateBst(tree.right, left, right)
// 		} else {
// 			return false
// 		}
// 	}
// 	return true
// }

// function inOrderTraverse(tree, array) {
//   // Write your code here.
// 	if (tree){
// 		inOrderTraverse(tree.left, array)
// 		array.push(tree.value);
// 		inOrderTraverse(tree.right, array)
// 	}
// 	return array
	
// }

// function preOrderTraverse(tree, array) {
//   // Write your code here.
// 	if (tree){
// 		array.push(tree.value)
// 		preOrderTraverse(tree.left, array)
// 		preOrderTraverse(tree.right, array)
// 	}
// 	return array
// }

// function postOrderTraverse(tree, array) {
//   // Write your code here.
// 	if (tree){
// 		postOrderTraverse(tree.left, array)
// 		postOrderTraverse(tree.right, array)
// 		array.push(tree.value)
// 	}
// 	return array
// }

// function moveElementToEnd(array, toMove) {
//   // Write your code here.
// 	let i = 0;
// 	let j = array.length - 1;
// 	while (i < j){
// 		while (i < j && array[j] == toMove)j--;
// 		if (array[i] == toMove)
// 			swap(i, j, array);
// 			i++;
		
// 	}
// 	return array
// }


// function swap(i, j, array){
// 	const tempi = array[i];
// 	array[i] = array[j];
// 	array[j] = tempi;
// }

// function findClosestValueInBst(tree, target) {
//   // Write your code here.
// 	return findClosestValueInBstHelper(tree, target, tree.value)
// }


// function findClosestValueInBstHelper(tree, target, closest){
// 	let currentNode = tree;
// 	while (currentNode !== null){
// 		if (Math.abs(target - closest) > Math.abs(target - currentNode.value)){
// 			closest = currentNode.value;
// 		}
		
// 		if (target < currentNode.value){
// 			currentNode = currentNode.left;
// 		} else if (target > currentNode.value){
// 			currentNode = currentNode.right;
// 		} else {
// 			break;
// 		}
// 	}
// 	return closest;
// }

// // This is the class of the input tree. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
	
// }


// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function branchSums(root) {
//   // Write your code here.
// 	const sums = [];
	
// 	calculateSums(root, 0, sums)
// 	return sums;
// }

// function calculateSums(node, runningSum, sums){
// 	if (!node) return null;
// 	const newRunningSum = runningSum + node.value;
// 	if (!node.left && !node.right){
// 		sums.push(newRunningSum)
// 	}
// 	calculateSums(node.left, newRunningSum, sums)
// 	calculateSums(node.right, newRunningSum, sums)
// }

// // Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.branchSums = branchSums;


function longestPalindromicSubstring(string) {
  // Write your code here.
	let longest = string[0];
	let currentLongest = "";
	for (let i = 1; i < string.length; i++){
		if (string[i - 1] == string[i + 1]){
			currentLongest = GetPalindromicString(string, i-1, i+1)
		} else if ( string[i-1] == string[i]){
			currentLongest = GetPalindromicString(string, i-1, i)
		}
		debugger

		if (currentLongest.length > longest.length){
			longest = currentLongest
		}
	}
	return longest
}

function GetPalindromicString(string, start, end){
	while ((start >= 0 && end < string.length) && string[start] == string[end]){
		start--;
		end++;
		// GetPalindromicString(string, start, end)
	}

	return string.slice(start+1, end)
}

function groupAnagrams(words) {
  // Write your code here.
	let anagrams = {};
	for (let i = 0; i < words.length; i++){
		const sortedWord = words[i].split("").sort().join("")
		if (!anagrams[sortedWord]){
			anagrams[sortedWord] = [words[i]]
		} else {
			anagrams[sortedWord].push(words[i])
		}
	}
	return Object.values(anagrams)
	
}

function longestPalindromicSubstring(string) {
  // Write your code here.
	let currentLongest = [0, 1];
	for (let i = 1; i < string.length; i++){
		const odd = getLongestPalindromeFrom(string, i-1, i+1);
		const even = getLongestPalindromeFrom(string, i-1, i);
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
		currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest 
	}
	return string.slice(currentLongest[0], currentLongest[1])
}

function getLongestPalindromeFrom(string, left, right){
	while (left >= 0 && right < string.length){
		if (string[left] !== string[right]){
			break;
		} else {
			left--;
			right++;
		}
	}
	return [left+1, right]
}


const string = "2345432abbbba5432zzbbababa";
console.log(longestPalindromicSubstring(string));


function validIPAddresses(string) {
  // Write your code here.
	let ipAddressFound = [];
	for (let i = 0; i < Math.min(string.length, 4); i++){
		const currentIpAddressParts = ['', '', '', ''];
		currentIpAddressParts[0] = string.slice(0, i);
		if (!isValidPart(currentIpAddressParts[0])) continue;
		
		for (j = i+1; j < i + Math.min(string.length - i, 4)){
			
		}
		currentIpAddressParts[1]
		currentIpAddressParts[2]
		currentIpAddressParts[3]
	}
}

function isValidPart(string){
	const stringAsInt = parseInt(string);
	if (stringAsInt > 255) return false;
	return string.length == stringAsInt.toString().length
}

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;


function runLengthEncoding(string) {
  // Write your code here.
	let newString = "";
	let counter = 1;
	for (let i = 0; i < string.length; i++){
		if (string[i] == string[i+1]){
			counter++;
			if (counter == 9){
				newString += "9" + string[i];
				counter = 0;
			} else if (counter == 0){
				
			}
		} else {
				newString += counter + string[i];
				counter = 1;
		}
	}
	return newString
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

function longestPalindromicSubstring(string) {
  // Write your code here.
	let currentLongest = [0, 1]
	for (let i = 1; i < string.length; i++){
		const odd = checkPalindrome(string, i - 1, i + 1)
		const even = checkPalindrome(string, i - 1, i)
		const longer = odd[1] - odd[0] > even[1] - even[0] ? odd : even
		currentLongest = currentLongest[1] - currentLongest[0] > longer[1] - longer[0] ? currentLongest : longer
	}
	return string.slice(currentLongest[0], currentLongest[1])
	
}

function checkPalindrome(string, left, right){
	while (left >= 0 && right < string.length){
		if (string[left] !== string[right]) break;
		left--;
		right++
	}
	return [left+1, right]
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

function generateDocument(characters, document) {
  // Write your code here.
	let objChar = {};
	for (let i = 0; i < characters.length; i++){
		if (!objChar[characters[i]]){
			objChar[characters[i]] = 1;
		} else {
			objChar[characters[i]]++;
		}
	}
	
	for (let j = 0; j < document.length; j++){
		if (!objChar[document[j]]){
			return false
		} else {
			objChar[document[j]]--;
			if (objChar[document[j]] < 0){
				return false
			}
		}
	}
	
	return true
	
}


// Do not edit the line below.
exports.generateDocument = generateDocument;

function longestPalindromicSubstring(string) {
  // Write your code here.
	let currentLongest = [0, 1];
	for (let i = 1; i < string.length; i++){
		const odd = getLongestPalindromeFrom(string, i-1, i+1);
		const even = getLongestPalindromeFrom(string, i-1, i);
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
		currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest 
	}
	return string.slice(currentLongest[0], currentLongest[1])
}

function getLongestPalindromeFrom(string, left, right){
	while (left >= 0 && right < string.length){
		if (string[left] !== string[right]){
			break;
		} else {
			left--;
			right++;
		}
	}
	return [left+1, right]
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

function reverseWordsInString(string) {
	const reverseArray = [];
	let chars = string;
	let i = 0, start = 0;
	while (i < chars.length+1){
		if (chars[i] == " " || !chars[i]){
			reverseArray.unshift(chars.slice(start, i));
			start = i + 1
		}
		i++;
	}
	return reverseArray.join(" ")
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;


function reverseWordsInString(string) {
	const reverseArray = [];
	let chars = string;
	let i = 0, start = 0;
	while (i < chars.length+1){
		if (chars[i] == " " || !chars[i]){
			reverseArray.unshift(chars.slice(start, i));
			start = i + 1
		}
		i++;
	}
	return reverseArray.join(" ")
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;

function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	const lastSeen = {};
	let longest = [0, 1];
	let startIdx = 0;
	for (let i = 0; i < string.length; i++){
		const char = string[i];
		if (char in lastSeen){
			startIdx = Math.max(startIdx, lastSeen[char]);
		}
		if (longest[1] - longest[0] < i - startIdx + 1)
	}
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
