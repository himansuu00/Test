let str = "Java Script";

let frequency = {};

for (let char of str.toLowerCase()) {

    if (char === " ") {
        continue;
    }

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);