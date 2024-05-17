let array = [];
for (let i = 0; i < 15; i++) {
    array.push(Math.floor(Math.random() * (30 - (-10) + 1)) + (-10));
}

let sum = 0;
let count = 0;
for (let num of array) {
    if (num > 0) {
        sum += num;
        count++;
    }
}
let averagePositive = sum / count;

console.log("Среднее арифметическое положительных элементов:", averagePositive);

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        array[i] = Math.pow(array[i], 2);
    }
}

console.log("Массив после замены отрицательных элементов их квадратами:", array);

let sumPositive = 0;
let countPositive = 0;
let sumNegative = 0;
let countNegative = 0;
let countZero = 0;

for (let num of array) {
    if (num > 0) {
        sumPositive += num;
        countPositive++;
    } else if (num < 0) {
        sumNegative += num;
        countNegative++;
    } else {
        countZero++;
    }
}

let averagePositive2 = sumPositive / countPositive;
let averageNegative2 = sumNegative / countNegative;

console.log("Среднее арифметическое положительных чисел:", averagePositive2);
console.log("Среднее арифметическое отрицательных чисел:", averageNegative2);
console.log("Количество нулей в массиве:", countZero);

let redCount = 0;
let blackCount = 0;
let whiteCount = 0;

for (let i = 0; i < 1000000; i++) {
    let randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
        case 0:
            redCount++;
            break;
        case 1:
            blackCount++;
            break;
        case 2:
            whiteCount++;
            break;
    }
}

console.log("Количество выпадений красного:", redCount);
console.log("Количество выпадений черного:", blackCount);
console.log("Количество выпадений белого:", whiteCount);
