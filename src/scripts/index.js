import { generatePasswordUpper } from "./generatePasswordUpper.js";
import { generatePasswordLower } from "./generatePasswordLower.js";
import { generatePasswordNums } from "./generatePasswordNums.js";
import { generatePasswordSymbols } from "./generatePasswordSymbols.js";
import { copyPassword } from "./copyPassword.js";
import { clearOptions } from "./clearOptions.js";
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



btnClear.addEventListener('click', clearOptions);
generateBtn.addEventListener('click', ()=>{
    if(upperCase.checked){
        generatePasswordUpper();
    }else if(lowerCase.checked){
        generatePasswordLower();
    }else if(nums.checked){
        generatePasswordNums();
    }else if(symbols){
        generatePasswordSymbols();
    }else{
        alert("Seleccione minimo una opcion.");
    }
});
copyBtn.addEventListener('click', copyPassword);