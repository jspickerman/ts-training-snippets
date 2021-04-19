const numbers: number[] = [1, 2, 3, 4];

let numbersDoubled: number[] = [];
for (let i = 0; i < numbers.length; i++) {
    const currentNumber: number = numbers[i];
    numbersDoubled.push(currentNumber * 2);
}

console.log('numbers: ', numbers);
console.log('numbers doubled: ', numbersDoubled);