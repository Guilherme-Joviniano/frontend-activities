

const getInputsA = () => {
    const number1 = document.querySelector(`#num1A`).value
    const number2 = document.querySelector(`#num2A`).value
    return {number1, number2 }
}
const showResultA = (max, min) => {
    const result = document.querySelector('#resultA');
    result.textContent = `${max - min}`
}
const handleFormExerciseA  = () => {
    if(!document.querySelector(`#A`).reportValidity()) alert(`Digite o valor corretos no campo do exercicio A`)
    const { number1, number2 } = getInputsA();
    if (number1 > number2) return showResultA(number1, number2 );
    return showResultA(number2, number1)
} 

const handleFormExerciseB = () => {
    const num = parseFloat(document.querySelector(`#num1B`).value)
    if (isNaN(num)) return alert(`Digite um valor valido no input do form B`)
    const result = document.querySelector(`#resultB`)
    if (num < 0) return result.textContent = `${num* -1}`
    return result.textContent = `${num}`
}

const handleFormExerciseC = () => {
    const result = document.querySelector(`#resultC`)
    let notas = [];
    for(let i = 1; i <= 4; ++i) {  
        let nota = parseFloat(document.querySelector(`#num${i}C`).value)
        if (nota < 0 || nota > 10) return alert(`E necessario um numero maior que zero e menor ou igual a 10 nos inputs do exercisio c`);
        if (isNaN(nota)) return alert(`Preencha os campos com valores validos no exercicio C`)
        notas.push(nota)
    }
    const media = notas.reduce((a, b) => a + b, 0) / notas.length
    if(media >= 5) return result.textContent = `APROVADO - ${media}`
    return result.textContent = `REPROVADO - ${media}`
}

const divible2 = (value) => {
    return value % 2 == 0
}
const divible3 = (value) => {
    return value % 3 == 0
}
const handleFormExerciseG = () => {
    const result = document.querySelector(`#resultG`)
    let valores = [];
    for(let i = 1; i <= 4; ++i) {
        let valor = parseInt(document.querySelector(`#num${i}G`).value)
        if(isNaN(valor)) return alert(`Digite valores validos no forms do exercicio G `)
        valores.push(valor)
    }
    const divisiveis = valores.filter(divible2).filter(divible3)
    result.textContent = divisiveis;
}

const handleFormExerciseK = () => {
    const result = document.querySelector(`#resultK`)
    const num = parseFloat(document.querySelector(`#num1K`).value)
    if (isNaN(num)) return alert(`Digite um valor valido no input do formulario K `)
    if (num >= 1 && num < 10) return result.textContent = `esta dentro da faixa permitida`   
    return result.textContent = `Nao esta dentro da faixa permitida `
}

const handleFormExerciseO = () => {
    const result = document.querySelector(`#resultO`)
    const num = parseFloat(document.querySelector(`#num1O`).value)
    if (isNaN(num)) return alert(`Digite um valor valido no input do formulario O `)
    const value = num * 2
    if(value < 30) return result.textContent = `Valor menor que 30`
    return result.textContent = `${value}`
} 

const handleButtonClick = (e) => {
    e.preventDefault();
    const el = e.target;
    if(el.id == 'exerciseA') return handleFormExerciseA();
    if(el.id == `exerciseB`) return handleFormExerciseB();
    if(el.id == `exerciseC`) return handleFormExerciseC();
    if(el.id == `exerciseG`) return handleFormExerciseG();
    if(el.id == `exerciseK`) return handleFormExerciseK();
    if(el.id == `exerciseO`) return handleFormExerciseO();

} 

document.addEventListener(`click`, handleButtonClick)