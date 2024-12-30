import { lowerCase, longitud, lowers } from "./consts.js";
export function generatePasswordLower() {
    let passResult = "";
    if (lowerCase.checked) {
        for (let i = 0; i <= longitud.value-1; i++) {
            passResult += lowers[Math.floor(Math.random() * lowers.length)];
        }
        password.value = passResult;
    }
}

