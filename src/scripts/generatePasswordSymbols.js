import { symbols, longitud, simbols } from "./consts.js";
export function generatePasswordSymbols() {
    let passResult = "";
    if (symbols.checked) {
        for (let i = 0; i <= longitud.value-1; i++) {
            passResult += simbols[Math.floor(Math.random() * simbols.length)];
        }
        password.value = passResult;
    }
}

