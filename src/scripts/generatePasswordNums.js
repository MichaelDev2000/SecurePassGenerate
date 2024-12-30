import { nums,longitud, numbers } from "./consts.js";
export function generatePasswordNums() {
    let passResult = "";
    if (nums.checked) {
        for (let i = 0; i <= longitud.value-1; i++) {
            console.log(i);
            passResult += numbers[Math.floor(Math.random() * numbers.length)];
        }
        password.value = passResult;
    }
}

