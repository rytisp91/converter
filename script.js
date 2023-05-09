const input = document.getElementById('myInput');
const numberAnswer = document.getElementById('text');

const render = (text, where) => {
    if (!where) {
        numberAnswer.innerText = text;
    } else {
        input.value = Math.round(text);
    }
}

const converters = {
    toBin: () => {
        let decimal = input.value;
        let binary = "";
        while (decimal > 0) {
            (decimal % 2 == 1) ? binary = "1" + binary : binary = "0" + binary;
            decimal = Math.floor(decimal / 2);
        }
        render(binary, 0);
    },
    toOctal: () => {
        let decimal = input.value;
        let octal = "";
        while (decimal > 0) {
            const remainder = decimal % 8;
            octal = remainder + octal;
            decimal = Math.floor(decimal / 8);
        }
        render(octal, 0);
    },
    toHex: () => {
        let decimal = input.value;
        let hex = "";
        const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        while (decimal > 0) {
            const index = decimal % 16;
            hex = hexDigits[index] + hex;
            decimal = Math.floor(decimal / 16);
        }
        render(hex, 0);
    }
}

const dividers = {
    3: () => { render(input.value / 3, 1); },
    7: () => { render(input.value / 7, 1); },
    4: () => { render(input.value / 4, 1); },
    2: () => { render(input.value / 2, 1); }
}

document.getElementById("3").addEventListener("click", dividers[3]);
document.getElementById("7").addEventListener("click", dividers[7]);
document.getElementById("4").addEventListener("click", dividers[4]);
document.getElementById("2").addEventListener("click", dividers[2]);

const toBin = document.getElementById('binBtn');
toBin.onclick = converters.toBin;

const toOctal = document.getElementById('octaBtn');
toOctal.onclick = converters.toOctal;

const toHex = document.getElementById('hexBtn');
toHex.onclick = converters.toHex;