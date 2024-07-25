// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
	if (arr.length === 0) return 0; // base case
	return arr[arr.length - 1] + sum(arr.slice(0, -1)); // recursive case,  return total + the function with updated array
};

// Reverse string using recursive approach
const reverse = (str) => {
	if (str.length === 0) {
		// base case, what is the end of the recursion
		return ""; // returns empty string in order to not add to the final output
	} else {
		// recursive case
		let reverseStr = str[str.length - 1]; // stores the last char
		let updatedStr = str.slice(0, -1); // removes last string, keeps function pure
		return reverseStr + reverse(updatedStr); // return output + function with updated str, which contains one less letter
	}
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 1;
	let first = 0;
	let second = 1;
	let result = first + second;
	for (let i = 2; i <= n; i++) {
		result = first + second;
		first = second;
		second = result;
	}
	return result;
};

// miss chatty simplified for iterative Fibonacci number
// const fibIter = (n) => {
// if (n < 2) return n;
//     let first = 0, second = 1;
//     for (let i = 2; i <= n; i++) {
//         [first, second] = [second, first + second];
//     }
//     return second;
// };

// Recursive fibonacci
const fibRec = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion
// Solution that didn't use binary search, lol, just iterating through the array.
// const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
// 	if (start > end) {
// 		return -1;
// 	} else if (arr[start] === target) {
// 		return start;
// 	}
// 	return binarySearch(arr, target, start + 1, end);
// };

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
	if (start > end) return -1; // if the start is greater then the end, return - 1
	let mid = Math.floor((start + end) / 2); // create a mid variable that is equal to the length of the arr divided by two and rounded down.
	if (arr[mid] === target) return mid; // if the element in the mid index of the array is equal to target, return the mid
	if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1); // if the element in the mid is greater than the target, return the binarySearch function on the array from the 0 index to the element before the current mid.
	if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end); // if the element in the mid is less than the target, return the binarySearch function on the array that contains the element that is in more than the current mid to the end of the array.
};

// from Zo
// const binarySearchIter = (arr, target) => {
// 	let l = 0,
// 		r = arr.length - 1;

// 	while (l < r) {
// 		const mid = Math.floor((r + l) / 2);
// 		if (arr[mid] === target) return mid;
// 		if (arr[mid] < target) l = mid + 1;
// 		if (arr[mid] > target) r = mid - 1;
// 	}

// 	return false;
// };

// const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
// 	if (start > end) return -1;
// 	let mid = Math.floor((start + end) / 2);
// 	if (arr[mid] === target) return mid;
// 	if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
// 	return binarySearch(arr, target, mid + 1, end);
// };

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
