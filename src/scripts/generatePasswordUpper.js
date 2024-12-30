import { upperCase,longitud, uppers } from "./consts.js";
export function generatePasswordUpper() {
    let passResult = "";
    if (upperCase.checked) {
        for (let i = 0; i <= longitud.value-1; i++) {
            console.log(i);
            passResult += uppers[Math.floor(Math.random() * uppers.length)];
        }
        password.value = passResult;
    }
}

