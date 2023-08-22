console.log("inicio da operação");

let listIllustrated = [
    '🍓',
    '🍍',
    '🍋',
    '🍇'
];

let array = ["string", 123, {}, [], null, undefined, NaN, false, true, 0, function () { console.log("opaaa"); }];
array[4]; // -> null
array[10](); // Executa a função presente no index 10 e imprime "opaaa" no console :D
array[array.length - 1](); // Acessa o ultimo item do array, e executa a função que está lá no ultimo item.

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("fim da operação");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < numbers.length; i++){
//     const double = numbers[i] * 2;
//     console.log(double);
// }
