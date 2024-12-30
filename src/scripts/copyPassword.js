import { password } from "./consts.js";

export const copyPassword = async () => {
    try {
        await navigator.clipboard.writeText(password.value);
        console.log('Contraseña copiada satisfactoriamente.');
    } catch (error) {
        console.error("Error al copiar en el portapapeles.", error);
    }
}