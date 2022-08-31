import showArray from "./helpers/showArray.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersPlus = (increaseValue, values) => values.map((e) => e + increaseValue);
const filterEvens = (values) => values.filter((e) => e % 2 === 0);
const filterOdds = (values) => values.filter((e) => e % 2 !== 0);

const applyDiscount = (discount, values) => values.map((e) => e - ((e / 100) * discount))
const totalValue = (values) => values.reduce((a, b) => a + b, 0);


showArray(numbers, 'main', 'Todos os Numeros:')

showArray(numbersPlus(100, numbers), 'main', 'Aumentando 100 em cada elemento');

showArray(filterEvens(numbers), 'main', 'Somente os numeros pares');

showArray([totalValue(applyDiscount(4, numbers)).toFixed(2)],'main', 'Total dos valores com desconto')

showArray(numbersPlus(21, filterOdds(numbers)),'main', 'todos os elementos impares somados de 21')
