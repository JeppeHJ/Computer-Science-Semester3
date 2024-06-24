let randomString = "(())";

function erParenteserBalanceret(kode) {
    let stak = [];
    let parentesPar = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of kode) {
        if (char in parentesPar) {
            stak.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stak.length === 0) return false;
            let sidsteParentes = stak.pop();
            if (parentesPar[sidsteParentes] !== char) return false;
        }
    }
    return stak.length === 0;
}

// Test af funktionen
let kodeEksempel = "function eksempel() { if (a[b] == {c: d}) {e(f); } }";
console.log(erParenteserBalanceret(kodeEksempel)); // Forventer true

let kodeEksempelUbalanceret = "function eksempel( { if (a[b] == {c: d}) e(f); }";
console.log(erParenteserBalanceret(kodeEksempelUbalanceret)); // Forventer false
