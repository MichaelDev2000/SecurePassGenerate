import {
    longPass,
    upperCase,
    lowerCase,
    longitud,
    nums,
    symbols,
    copyBtn,
    password,
    generateBtn,
    btnClear
} from "./consts.js";

export function clearOptions(){
    upperCase.checked = false;
    lowerCase.checked = false;
    nums.checked = false;
    symbols.checked = false;
    password.value = null;

}