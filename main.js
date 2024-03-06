// Дано масив[16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47] 


// 1. Знайти суму та кількість позитивних елементів.
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
let quantity = 0;

arr.forEach(el => {
  if (el > 0) {
    quantity += 1;
    sum += el;
  }
});

console.log(`Кількість позитивних елементів: ${quantity}`)
console.log(`Сума позитивних елементів: ${sum}`)
console.log(`-------------------------`)


// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minPosition = 0;

arr.forEach((el, i) => {
  if (el < minElement) {
    minElement = el;
    minPosition = i;
  }
});

console.log(`Мінімальний елемент: ${minElement}`)
console.log(`Індекс мінімального елементу: ${minPosition}`)
console.log(`-------------------------`)

// 3. Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxPosition = 0;

arr.forEach((el, i) => {
  if (el > maxElement) {
    maxElement = el;
    maxPosition = i;
  }
});

console.log(`Максимальний елемент: ${maxElement}`)
console.log(`Індекс максимального елементу: ${maxPosition}`)
console.log(`-------------------------`)

// 4. Визначити кількість негативних елементів.
let minQuantity = 0;

arr.forEach(el => {
  if (el < 0) {
    minQuantity += 1;
  }
});

console.log(`Кількість негативних елементів: ${minQuantity}`)
console.log(`-------------------------`)

// 5. Знайти кількість непарних позитивних елементів.
let oddQuantity = 0;

arr.forEach(el => {
  if (el > 0 && el % 2 !== 0 ) {
    oddQuantity += 1;
  }
});

console.log(`Кількість непарних позитивних елементів: ${oddQuantity}`)
console.log(`-------------------------`)

// 6. Знайти кількість парних позитивних елементів.
let evenQuantity = 0;

arr.forEach(el => {
  if (el > 0 && el % 2 === 0 ) {
    evenQuantity += 1;
  }
});

console.log(`Кількість парних позитивних елементів: ${evenQuantity}`)
console.log(`-------------------------`)

// 7. Знайти суму парних позитивних елементів.
let evenSum = 0;

arr.forEach(el => {
  if (el > 0 && el % 2 === 0 ) {
    evenSum += el;
  }
});

console.log(`Сумма парних позитивних елементів: ${evenSum}`)
console.log(`-------------------------`)

// 8. Знайти суму непарних позитивних елементів.
let oddSum = 0;

arr.forEach(el => {
  if (el > 0 && el % 2 !== 0 ) {
    oddSum += el;
  }
});

console.log(`forEach Сумма непарних позитивних елементів: ${oddSum}`)

// reduce
let resultOddSum = arr.reduce((acc, current) => {
  if (current > 0 && current % 2 !== 0) {
    return acc + current;
  }
  return acc;
}, 0);

console.log(`Reduce Сумма непарних позитивних елементів: ${resultOddSum}`);
console.log(`-------------------------`);

// 9.Знайти добуток позитивних елементів.
let productPositive = 1;

arr.forEach(el => {
  if (el > 0 ) {
    productPositive *= el;
  }
});

console.log(`Добуток позитивних елементів: ${productPositive}`)
console.log(`-------------------------`)

// 10.Знайти найбільший серед елементів масиву, решту обнулити.
const modifiedArray = arr.map(el => {
  if (el !== Math.max(...arr)) {
    return el = 0;
  }
  return el;
});

console.log(`Новий масив з обнуленими крім найбільшого: ${modifiedArray}`);
