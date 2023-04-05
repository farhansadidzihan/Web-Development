// || String ||
let nam = "Zihan";
console.log(nam[0]);  // Gives the 0th char of the string

// Template Literals
let sentence = `This is a "Competitive Programmer", 'Zihan' is his name`;  // With backtics ` ` single and double quotes can be used in a string
console.log(sentence)
let zihan = `Who is Zihan? ${sentence}!`;  // String Interpolation
console.log(zihan)

// String Methods & Properties
console.log(nam.length);  // Returns length of the string
console.log(sentence.toUpperCase());  // Converts into uppercase
console.log(sentence.toLowerCase());  // Converts into lowercase
console.log(sentence.replace("Programmer", "Coder"));  // Replace sub-string with given string
console.log("Zhan ".concat("Data Scientist"));  // Concatinates two string
console.log(sentence.slice(5))  // Slices string from 5th index to end
console.log(sentence.slice(5, sentence.length))  // Slices string from 5th index to end
let z = " Zihan    ";
console.log(z.trim())

// || Array ||
let mark = [33, 23, 43, 88, 79, 100];
mark[6] = 99;  // Adding a new value in arry
console.log(mark.length);  // Returns the length of an array
console.log(typeof mark);  // Arrays are object in type

// Array Methods & Properties
let marks = [33, 2323, 43, 88, 793, 100];
let str_marks = marks.toString();  // Converts array into string
let joining = marks.join(" --> ");  // Joins with given sub-string and returns a modified string
console.log(marks.pop());  // Removes last element of the array
console.log(marks.push(99));  // Adds 99 at the begin of the array
console.log(marks.shift());  // Removes first element of the array
console.log(marks.unshift(13));  // Adds 13 at the begin of the array
delete marks[88];  // Removes array element, but doesn't change length of the array
let marks2 = [32, 43, 55, 67, 89, 25];
let mark3 = marks.concat(marks2);  // Merges two array, but doesn't change existing array
console.log(mark3.sort())  // Sorts the array alphabetically, modifies the original array
let compare = (a, b) => {
  return a - b
}
console.log(mark3.sort(compare))  // Sorts array in acsending order
console.log(mark3.reverse())  // Reverses the array
console.log(mark3.slice(5))  // Slices the array from 5th indexed element to last
console.log(mark3.splice(3, 4, 1032, 1035, 1065, 1092, 1053)) // Modifies the array 3 is the position, 4 is the number of items to delete and after all are elements to add
console.log(mark3)
let num = [1, 2, 3, 4, 5];
num.forEach((element) => {  // forEach loop in array
  console.log(element * element);
})
let zih = "Zihan";
console.log(Array.from(zih));  // Takes string or HTML collection and returns it as an array
for (let i in num) { 
  console.log(i);  // Gives the index of the array
}
for (let j of num) {
  console.log(j);  // Gives the value of the array
}
let n = [2, 45, 67, 83, 74];
let mp = n.map((item, index, arr) => {  // Performs some operation in array & returns new array
  console.log(item, index, arr);
  return index + index;
})
let fil = n.filter((e) => {  // Filterize the array with given operation
  return e % 2 != 0;
})

let red = n.reduce((h1, h2) => {  // Performs operation with values & then move forward and return a value
  return h1 + h2;
})
