class Calculadora {
    constructor() {
        document.addEventListener('click', this.handleClick);
        this.firstValue = document.getElementById('firstValueInput').value;
        this.secondValue = document.getElementById('secondValueInput').value;
        this.result = document.querySelector('.result');   
    }
    getResult() {
        return this.result;
    }
    setResult(value){
        if(isNaN(value)) return this.result.textContent = 'Porfavor Digite um Número Valido ou Preencha os Campos!'
        this.result.textContent = value;
    }
    setFirstValue() {
        this.firstValue = document.getElementById('firstValueInput').value;
    }
    setSecondValue() {
        this.secondValue = document.getElementById('secondValueInput').value;
    }
    handleClick = (e) => {
        e.preventDefault();
        const mathOperation = e.target.id;

        this.setFirstValue();
        this.setSecondValue();

        if(mathOperation == 'add') this.setResult(this.calculate(this.firstValue, this.secondValue, add));
        if(mathOperation == 'subtract') this.setResult(this.calculate(this.firstValue, this.secondValue, subtract));
        if(mathOperation == 'multiple') this.setResult(this.calculate(this.firstValue, this.secondValue, multiple));
        if(mathOperation == 'divide')  this.setResult(this.calculate(this.firstValue, this.secondValue,  divide));
    }
    calculate = (value1, value2, callBackFn) => {
        const first = parseFloat(value1);
        const second = parseFloat(value2);
        console.log(value1)
        return callBackFn(first, second)
    }
}
function add(value1, value2) {
    return value1 + value2
}
function subtract(value1, value2) {
    return value1 - value2
}
function multiple(value1, value2) {
    return value1 * value2
}
function divide(value1, value2) {
    return value1 / value2
}


new Calculadora()
