// || for loop, for in loop, for of loop, while loop, do while loop ||

// || for loop ||
let sum = 0;
let n = 50;
for (let i = 0; i < n; i++) {
  sum += i;
}
console.log("The sum of n numbers is:- ", sum)

// || for in loop ||
let marks = {
    "Zihan" : 100,
    "Harry" : 100,
    "Aman" : 100
}
for (let name in marks) {
  console.log(name, marks[name]);
}

// || for of loop ||
for (let char of "Zihan is a coder") {
    console.log(char);
}

// || while loop ||
let n1 = 10;
let j = 0;
while (j < n1) {
  console.log(j + 1);
  j++;
}

// || do while loop ||
let n2 = 10;
let k = 10;
do {
  console.log(k + 1);
  k++;
} while (k < n2);
