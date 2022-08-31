import showArray from "./helpers/showArray.js";

// Container to be included the arrays 
const numbers = [23, 5, 8, 10, 100, 45]

// Functions to manipulate the numbers array
const applyDiscount = (numbers, percentage) => numbers.map((e) => e - ((e / 100) * percentage));
const filterByLowerThan = (values, targetValue) => values.filter((e) => e >= targetValue);
const totalValue = (values) => values.reduce((a, b) => a + b, 0);

showArray(numbers, 'main', `todo os items: `);

showArray(applyDiscount(numbers, 20), 'main', `items com desconto de 20% `);

showArray(filterByLowerThan(numbers, 10), 'main', `todo os items maiores que 10: `);

showArray([totalValue(numbers)], 'main', 'Valor Total: ')