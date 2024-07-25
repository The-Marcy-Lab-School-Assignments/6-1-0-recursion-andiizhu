// base case, what is the end of the recursion
// return what is at the end of the recursion
// recursive case
// get the last element of the arr
// stores the updated arr in order to keep the function pure
// stores total + the function with updated array

const sum = (arr) => {
	if (arr.length === 0) {
		return 0;
	} else {
		total = arr[arr.length - 1];
		updatedArr = arr.slice(0, arr.length - 1);
		return total + sum(updatedArr);
	}
};

// const sum = (arr) => {
// 	if (arr.length === 0) {
// 		// base case, what is the end of the recursion
// 		return 0; // return what is at the end of the recursion
// 	} else {
// 		// recursive case
// 		let total = arr[arr.length - 1]; // get the last element of the arr
// 		let restOfArr = arr.slice(0, arr.length - 1); // stores the updated arr in order to keep the function pure
// 		return total + sum(restOfArr); // return total + the function with updated array
// 	}
// };

const reverse = (str) => {
    if (str.length)
};

const countDownFromRecursion = (num) => {
	if (num === 0) return "Kaboom";
	console.log(num);
	countDownFromRecursion(num - 1);
};

countDownFromRecursion(5);
countDownFromRecursion(0);


// Getting the sum of an array of numbers
const sumArray = (arr, sum = 0, idx = 0) => {
    if (idx = arr.length) return sum;
    return sumArray(arr, sum + arr[idx], idx + 1)
}