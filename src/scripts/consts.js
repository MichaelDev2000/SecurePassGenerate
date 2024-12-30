const longPass = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const longitud = document.getElementById('length');
const nums = document.getElementById("numbers");
const symbols = document.getElementById('symbols');
const copyBtn = document.getElementById("copy");
const btnClear = document.getElementById("clear");
let password = document.getElementById("password");
const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppers = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numbers = [..."1234567890"];
const simbols = [..."#$%&?¡¿!_-*@.,"];

const generateBtn = document.getElementById('generate');

export {
    longPass,
    upperCase,
    lowerCase,
    longitud,
    nums,
    symbols,
    copyBtn,
    password,
    generateBtn,
    lowers,
    uppers,
    numbers,
    simbols,
    btnClear
}