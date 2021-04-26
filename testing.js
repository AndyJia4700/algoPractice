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

function longestSubstringWithoutDuplication(string) {
	// Write your code here.
	const lastSeen = {};
	let longest = [0, 1];
	let startIdx = 0;
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (char in lastSeen) {
			startIdx = Math.max(startIdx, lastSeen[char] + 1);
		}
		lastSeen[char] = i;

		if (longest[1] - longest[0] < i - startIdx + 1) {
			longest = [startIdx, i + 1];
		}

	}
	return string.slice(longest[0], longest[1])
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;


function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	const lastSeen = {};
	let longest = [0, 1];
	let startIdx = 0;
	for (let i = 0; i < string.length; i++){
		const char = string[i];
		if (char in lastSeen){
			startIdx = Math.max(startIdx, lastSeen[char]+1);
		}
		lastSeen[char] = i;
		
		if (longest[1] - longest[0] < i - startIdx + 1){
			longest = [startIdx, i + 1];
		}
		
	}
	return string.slice(longest[0], longest[1])
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;


// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multi = 1) {
  // Write your code here.
	let sum = 0;
	for (const ele of array){
		if (Array.isArray(ele)){
			sum += productSum(ele, multi + 1);
		} else {
			sum += ele
		}
	}
	return sum * multi
}

// Do not edit the line below.
exports.productSum = productSum;

function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	const lastSeen = {};
	let longest = [0, 1];
	let startIdx = 0;
	for (let i = 0; i < string.length; i++){
		const char = string[i];
		if (char in lastSeen){
			startIdx = Math.max(startIdx, lastSeen[char]+1);
		}
		lastSeen[char] = i;
		
		if (longest[1] - longest[0] < i - startIdx + 1){
			longest = [startIdx, i + 1];
		}
		
	}
	return string.slice(longest[0], longest[1])
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;


function longestPeak(array) {
  // Write your code here.
	let longestPeakLength = 0;
	let i = 1;
	while (i < array.length - 1){
		const isPeak = array[i-1] < array[i] && array[i] > array[i+1];
		if (!isPeak){
			i++;
			continue;
		}
		
		let leftIdx = i - 2;
		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
			leftIdx--;
		}
		
		let rightIdx = i + 2;
		while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
			rightIdx++;
		}
		
		const currentPeakLength = rightIdx - leftIdx - 1;
		longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
		i = rightIdx;
	}
	return longestPeakLength
}


// Do not edit the line below.
exports.longestPeak = longestPeak;

function moveElementToEnd(array, toMove) {
	// Write your code here.
	let startIdx = 0;
	let endIdx = array.length - 1;
	while (startIdx < endIdx) {
		while (startIdx < endIdx && array[endIdx] == toMove) endIdx--;
		if (array[startIdx] == toMove) {
			swapArray(startIdx, endIdx, array);
			startIdx++;
		} else {
			startIdx++;
		}
	}
	return array
}

function swapArray(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	return array
}



// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

// This is an input class. Do not edit.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function binaryTreeDiameter(tree) {
	// Write your code here.
	return -1;
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;


function patternMatcher(pattern, string) {
  // Write your code here.
	if (pattern.length > string.length) return [];
	const newPattern = getNewPattern(pattern);
	const firstYPos = getFirstYPos(newPattern);
	const count = countPattern(newPattern);
	const didSwitch = newPattern[0] !== pattern[0];
	if (count['y'] !== 0){
		for (let lenOfX = 1; lenOfX < string.length; lenOfX++){
			const lenOfY = (string.length - count['x'] * lenOfX) / count['y'];
			const yIdx = firstYPos * lenOfX;
			const x = string.slice(0, lenOfX);
			const y = string.slice(yIdx, yIdx + lenOfY);
			const potentialMatch = newPattern.map(a => a =='x' ? x : y);
			if (potentialMatch.join('') == string){
				return didSwitch ? [y, x] : [x, y]
			}
		}
	}else{
		const lenOfX = string.length / count['x'];
		const x = string.slice(0, lenOfX);
		const potentialMatch = newPattern.map(a => a == 'x' ? x : "");
		if (potentialMatch.join('') == string){
			return didSwitch ? ['', x] : [x, '']
		}
	}
	
	return []
}

function getNewPattern(pattern){
	if (pattern[0] == 'y'){
		return pattern.split('').map(a => a == 'y' ? 'x' : 'y');
	}else{
		return pattern.split('');
	}
}

function getFirstYPos(pattern){
	for (let i = 0; i < pattern.length; i++){
		if (pattern[i] == 'y') return i
	}
}

function countPattern(pattern){
	let count = {'x': 0, 'y': 0};
	for (let i = 0; i < pattern.length; i++){
		if (pattern[i] == 'x'){
			count['x'] += 1;
		} else {
			count['y'] += 1;
		}
	}
	return count
}

// Do not edit the line below.
exports.patternMatcher = patternMatcher;

function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	const lastSeen = {};
	let currentLongest = [0,1];
	let startIdx = 0;
	
	for (let i = 0; i < string.length; i++){
		const char = string[i];
		if (char in lastSeen){
			startIdx = Math.max(startIdx, lastSeen[char]+1);
		}
		if (currentLongest[1] - currentLongest[0] < i+1 - startIdx) {
			currentLongest = [startIdx, i+1]
		}
		lastSeen[char] = i;
	}
	return string.slice(currentLongest[0], currentLongest[1])
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;


function underscorifySubstring(string, substring) {
  // Write your code here.
	const array = getLocations(string, substring);
	// return array
	const collapsedArray = collapsedLocations(array);
	return array
	const finalArray = [];
	for (let i = 0; i < collapsedArray.length; i++){
		const element = string.slice(collapsedArray[i][0], collapsedArray[i][1]);
		finalArray.push(element)
	}
	return finalArray
}

function getLocations(string, substring){
	const array = [];
	for (let i = 0; i < string.length; i++){
		if (string.slice(i, i + substring.length) == substring){
			array.push([i, i + substring.length])
		}
	}
	return array
}

function collapsedLocations(array){
	for (let i = 0; i < array.length - 1; i++){
		if (array[i][1] >= array[i+1][0]){
			const temp = array[i+1][1]
			array.splice(i+1,i+1);
			array[i][1] = temp;
		} 
	}
	return array
}
// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;


// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while (currentNode){
		let nextNode = currentNode.next;
		while (nextNode && nextNode.value == currentNode.value){
			nextNode = nextNode.next;
		}
		
		currentNode.next = nextNode;
		currentNode = nextNode;
	}
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while (currentNode){
		let nextNode = currentNode.next;
		while (nextNode && nextNode.value == currentNode.value){
			nextNode = nextNode.next;
		}
		
		currentNode.next = nextNode;
		currentNode = nextNode;
	}
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;


const a = "xxy"
const b = "zzw"
const c = "xzxzyw"
function interwave(a,b,c){
	
}

// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.minMaxStack = [];
		this.stack = []
	}
  peek() {
    // Write your code here.
		return this.stack[this.stack.length - 1]
  }

  pop() {
    // Write your code here.
		this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
    // Write your code here.
		const newMinMax = {min: number, max: number};
		if(this.minMaxStack.length){
			const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
			newMinMax.min = Math.min(lastMinMax.min, number);
			newMinMax.max = Math.max(lastMinMax.max, number);
		}
		this.minMaxStack.push(newMinMax);
		this.stack.push(number);
  }

  getMin() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].min
  }

  getMax() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length - 1].max
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;

function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findBst(tree, target, tree.value)
}

function findBst(tree, target, closest){
	let currentNode = tree;
	while (currentNode){
		const currentDiff = Math.abs(currentNode.value - target);
		const closestDiff = Math.abs(closest - target);
		closest = currentDiff < closestDiff ? currentNode.value : closest
			
		if (target > currentNode.value){
			currentNode = currentNode.right;
		}else if (target < currentNode.value){
			currentNode = currentNode.left;
		} else {
			return currentNode.value
		}
	}
	return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	const sums = []
	calculateSums(root, 0, sums)
	return sums
}

function calculateSums(node, runningSum, sums){
	if (!node) return null;
	let newRunningSum = node.value + runningSum;
	if (!node.left && !node.right){
		sums.push(newRunningSum)
	}
	calculateSums(node.left, newRunningSum, sums)
	calculateSums(node.right, newRunningSum, sums)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;


function nodeDepths(root, depth = 0) {
  // Write your code here.
	if (!root) return 0;
	return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)
	
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;


function findThreeLargestNumbers(array) {
  // Write your code here.
	const tempArr = new Array(3).fill(null);
	
	for (let i = 0; i < array.length; i++){
		if (!tempArr[2] || array[i] >= tempArr[2]){
			tempArr[0] = tempArr[1];
			tempArr[1] = tempArr[2];
			tempArr[2] = array[i];
		} else if (!tempArr[1] || (tempArr[1] <= array[i] && array[i] < tempArr[2])){
			tempArr[0] = tempArr[1];
			tempArr[1] = array[i];
		} else if (!tempArr[0] || (tempArr[0] < array[i] && array[i] < tempArr[1])){
			tempArr[0] = array[i];
		} 
	}
	return tempArr
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

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

function findThreeLargestNumbers(array) {
  // Write your code here.
	const tempArr = new Array(3).fill(null);
	
	for (let i = 0; i < array.length; i++){
		if (!tempArr[2] || array[i] >= tempArr[2]){
			tempArr[0] = tempArr[1];
			tempArr[1] = tempArr[2];
			tempArr[2] = array[i];
		} else if (!tempArr[1] || (tempArr[1] <= array[i] && array[i] < tempArr[2])){
			tempArr[0] = tempArr[1];
			tempArr[1] = array[i];
		} else if (!tempArr[0] || (tempArr[0] < array[i] && array[i] < tempArr[1])){
			tempArr[0] = array[i];
		} 
	}
	return tempArr
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	redShirtSpeeds.sort((a,b) => a-b);	
	blueShirtSpeeds.sort((a,b) => a-b);
	let totalSpeeds = 0;
	let left = 0;
	let right = redShirtSpeeds.length - 1;
	while (left < redShirtSpeeds.length){
		if (fastest){
			totalSpeeds += Math.max(redShirtSpeeds[left], blueShirtSpeeds[right]);
		} else {
			totalSpeeds += Math.max(redShirtSpeeds[left], blueShirtSpeeds[left]);
		}
		left++;
		right--;
	}
  return totalSpeeds;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

function tournamentWinner(competitions, results) {
  // Write your code here.
	let scores = {};
	for (let i = 0; i < competitions.length; i++){
		const homeTeam = competitions[i][0];
		const awayTeam = competitions[i][1];
		if (results[i] == 0){
			if (scores[awayTeam]){
				scores[awayTeam] += 3;
			}else{
				scores[awayTeam] = 3
			}
			
		} else {
			if (scores[homeTeam]){
				scores[homeTeam] += 3;
			}else{
				scores[homeTeam] = 3
			}
			
		}
	}
	
  return Object.keys(scores).reduce((a,b) => scores[a] > scores[b] ? a : b)
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

function runLengthEncoding(string) {
  // Write your code here.
	let tempStr = "";
	let counter = 1;
	for (let i = 0; i < string.length; i++){
		const currentChar = string[i];
		const nextChar = string[i+1];
		if ( currentChar !== nextChar || counter == 9 ){
			tempStr += counter + currentChar
			counter = 0;
		}
		counter++;
	}
	return tempStr
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

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

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b)=>a-b);
	arrayTwo.sort((a,b)=>a-b);
	let i = 0; let j = 0; let current = Infinity; let small = Infinity; let pair = [];
	while (i < arrayOne.length && j < arrayTwo.length){
		let first = arrayOne[i];
		let second = arrayTwo[j];
		
		if (first < second){
			current = second - first;
			i++;
		} else if (first > second){
			current = first - second;
			j++;
		} else {
			return [first, second]
		}
		
		if (current < small){
			small = current;
			pair = [first, second]
		}
	}
	return pair;
	
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

function moveElementToEnd(array, toMove) {
  // Write your code here.
	let left = 0; 
	let right = array.length - 1;
	while (left < right){
		while (left < right && array[right] == toMove) right--;
		if (array[left] == toMove){
			const temp = array[left];
			array[left] = array[right];
			array[right] = temp
		}
		left++;
	}
	return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

function spiralTraverse(array) {
  // Write your code here.
	const result = [];
	spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
	return result
}

function spiralFill(array, startRow, endRow, startCol, endCol, result){
	if (startRow > endRow || startCol > endCol) return null;
	
	for (let col = startCol; col <= endCol; col++){
		result.push(array[startRow][col])
	}
	
	for (let row = startRow+1; row <= endRow;row++){
		result.push(array[row][endCol])
	}
	
	for (let col = endCol-1; col >= startCol;col--){
		if (startRow == endRow) break;
		result.push(array[endRow][col])
	}
	
	for (let row = endRow-1; row >= startRow+1;row--){
		if (startCol == endCol) break;
		result.push(array[row][startCol])
	}
	
	spiralFill(array, startRow+1, endRow-1, startCol+1, endCol-1, result)
}
// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;

function longestPeak(array) {
  // Write your code here.
	let longestPeakLength = 0;
	// let peakIdx = [];
	for (let i = 1; i < array.length - 1; i++){
		const isPeak = array[i] > array[i-1] && array[i] > array[i+1];
		if (isPeak){
			let peakStart = i - 1;
			let peakEnd = i + 1;
			while (array[peakStart] > array[peakStart - 1]) peakStart--;
			while (array[peakEnd] > array[peakEnd + 1]) peakEnd++;
			const currentPeakLength = peakEnd - peakStart + 1;
			if (currentPeakLength > longestPeakLength)longestPeakLength = currentPeakLength
			// if (currentPeakLength > longestPeakLength){
			// 	longestPeakLength = currentPeakLength;
			// 	peakIdx = [peakStart, peakEnd+1]
			// }
			
		}
	}
	// return array.slice(peakIdx[0], peakIdx[1])
	return longestPeakLength
}

// Do not edit the line below.
exports.longestPeak = longestPeak;

function arrayOfProducts(array) {
  // Write your code here.
	const products = new Array(array.length).fill(1);
	
	let leftProduct = 1;
	for (let i = 0; i < array.length; i++){
		products[i] *= leftProduct;
		leftProduct *= array[i]
	}
	
	let rightProduct = 1;
	for (let i = array.length - 1; i >= 0; i--){
		products[i] *= rightProduct;
		rightProduct *= array[i]
	}
	
	return products
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

function mergeOverlappingIntervals(array) {
  // Write your code here.
	const sortedArray = array.sort((a,b)=>a[0] - b[0]);
	const result = [sortedArray[0]];
	
	for (let i = 1; i < array.length; i++){
		const nextInterval = array[i];
		const lastResult = result[result.length - 1];
		
		if (lastResult[1] >= nextInterval[0]){
			lastResult[1] = Math.max(lastResult[1], nextInterval[1]);
		} else {
			result.push(nextInterval);
		}
	}
	return result
	
}

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		let currentNode = this;
		while (currentNode){
			if(currentNode.value > value){
				if (!currentNode.left){
					currentNode.left = new BST(value);
					return this
				}else{
					currentNode = currentNode.left;
				}
			}else{
				if (!currentNode.right){
					currentNode.right = new BST(value);
					return this
				}else{
					currentNode = currentNode.right;
				}
			}
		}
  }

  contains(value) {
    // Write your code here.
		let currentNode = this;
		while (currentNode){
			if (currentNode.value > value){
				currentNode = currentNode.left
			}else if (currentNode.value < value){
				currentNode = currentNode.right
			}else{
				return true
			}
		}
		return false
  }

  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
		let currentNode = this;
		while(currentNode){
			if (currentNode.value > value){
				parentNode = currentNode;
				currentNode = currentNode.left;
			}else if (currentNode.value < value){
				parentNode = currentNode;
				currentNode = currentNode.right;
			}else{
				
		}
    	return this;
  	}
}

// Do not edit the line below.
exports.BST = BST;

