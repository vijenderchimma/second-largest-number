const numbers = [11, 18, 5, 8, 7, 9, 22];
numbers.reverse()
// Sort the numbers in descending order
const sortedNumbers = numbers.sort((a, b) => b - a);

// The second largest number will be at index 1 (indexing starts from 0)
const secondLargest = sortedNumbers[1];

console.log("The second largest number is:", secondLargest);