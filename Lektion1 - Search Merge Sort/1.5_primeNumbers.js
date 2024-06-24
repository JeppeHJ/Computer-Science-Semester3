// Lav et program, der udskriver alle primtal op til og med et givet positivt heltal.

// Funktionen findPrimtal udskriver alle primtal op til et specificeret tal, opTilNummer.
function findPrimtal(opTilNummer) {
    // Tjekker først, om opTilNummer er mindre end 2, da det mindste primtal er 2.
    if (opTilNummer < 2) {
        console.log("Der er ingen primtal mindre end 2");
        return;
    }

    // Løkker gennem alle tal fra 2 op til (og inklusiv) opTilNummer.
    for (let n = 2; n <= opTilNummer; n++) {
        // Tjekker for hvert tal, om det er et primtal ved at kalde erPrimtal funktionen.
        if (erPrimtal(n)) {
            // Hvis tallet er et primtal, udskrives det.
            console.log(n);
        }
    }
}

// Funktionen erPrimtal tjekker, om et givet tal er et primtal.
function erPrimtal(tal) {
    // Returnerer false, hvis tallet er mindre end 2, da disse ikke er primtal.
    if (tal < 2) {
        return false;
    }

    // Løkke, der starter fra 2 og går op til (og inklusiv) kvadratroden af det givne tal.
    for (let i = 2; i <= Math.sqrt(tal); i++) {
        // Tjekker om 'tal' kan divideres jævnt (uden rest) med 'i'.
        // Hvis ja, er 'tal' ikke et primtal, og funktionen returnerer false.
        if (tal % i === 0) {
            return false;
        }
    }

    // Hvis 'tal' ikke er deleligt med nogen tal op til dens kvadratrod, er det et primtal.
    // Derfor returneres true.
    return true;
}

// Eksempel på brug af funktionen findPrimtal
findPrimtal(10); // Vil udskrive primtal fra 2 til 10

