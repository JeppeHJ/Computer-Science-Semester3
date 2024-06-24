// Definerer en funktion, der returnerer et Promise
function getRandomPromise() {
    // Opretter et nyt Promise. Denne konstruktion tager en funktion (executor) med to parametre: resolve og reject.
    return new Promise((resolve, reject) => {
        // Anvender setTimeout for at simulere asynkron adfærd. Denne funktion vil blive kaldt efter en forsinkelse (her 1000 millisekunder).
        setTimeout(() => {
            // Genererer et tilfældigt tal mellem 0 og 10
            const randomNumber = Math.floor(Math.random() * 11);

            // Bruger try-catch blok til at fange eventuelle exceptions
            try {
                // Checker værdien af det tilfældige tal og handler derefter
                if (randomNumber < 7) {
                    // Hvis tallet er mindre end 7, opfylder (resolve) vi løftet med en besked
                    resolve("Resolved: Tilfældigt tal er " + randomNumber);
                } else if (randomNumber > 7) {
                    // Hvis tallet er større end 7, afviser (reject) vi løftet med en besked
                    reject("Rejected: Tilfældigt tal er " + randomNumber);
                } else if (randomNumber === 10) {
                    // Hvis tallet er præcis 10, smider vi en exception
                    throw new Error("Exception: Tilfældigt tal er 10");
                } else {
                    // For tallet 7, afviser vi også løftet
                    reject("Rejected: Tilfældigt tal er 7");
                }
            } catch (e) {
                // Hvis en exception bliver kastet (i dette tilfælde, hvis tallet er 10), fanger vi den her og afviser løftet med en fejlmeddelelse
                reject("Exception caught: " + e.message);
            }
        }, 1000); // Angiver en forsinkelse på 1 sekund
    });
}

let results = [];
let promise1 = getRandomPromise();
let promise2 = getRandomPromise();
let promise3 = getRandomPromise();
let promise4 = getRandomPromise();
results.push(promise1);
results.push(promise2);
results.push(promise3);
results.push(promise4);

// Behandler en gruppe promises og håndterer resultatet, når alle promises er opfyldt eller en af dem afvises
Promise.all(results)
    .then(result => console.log(result)) // Udføres, når alle promises er opfyldt; 'result' er et array af opfyldte værdier
    .catch(error => console.error(error)) // Udføres, hvis mindst en promise afvises; 'error' er afvisningsgrunden for den første afviste promise
    .finally(() => console.log('Promise.all operationen er fuldført')); // Udføres, uanset om promises blev opfyldt eller afvist

// Behandler en gruppe promises og håndterer resultatet, når mindst en af promises bliver opfyldt
Promise.any(results)
    .then(result => console.log(result)) // Udføres, når mindst en promise opfyldes; 'result' er værdien af den første opfyldte promise
    .catch(error => console.error(error)) // Udføres, hvis alle promises afvises; 'error' er en AggregateError, der indeholder alle afvisningsgrunde
    .finally(() => console.log('Promise.any operationen er fuldført')); // Udføres, uanset resultatet

// Behandler en gruppe promises og returnerer et resultat for hver promise, uanset om de er opfyldt eller afvist
Promise.allSettled(results)
    .then(result => console.log(result)) // Udføres, når alle promises er "afgjort" (enten opfyldt eller afvist); 'result' er et array af objekter med status og værdi/årsag
    .catch(error => console.error(error)) // Dette kaldes normalt ikke, da allSettled ikke afviser
    .finally(() => console.log('Promise.allSettled operationen er fuldført')); // Udføres, uanset resultatet

// Kører getRandomPromise og håndterer dens opfyldelse eller afvisning
getRandomPromise()
    .then(result => console.log(result)) // Udføres, når løftet opfyldes; 'result' er opfyldelsesværdien
    .catch(error => console.error(error)) // Udføres, når løftet afvises; 'error' er afvisningsgrunden
    .finally(() => console.log('Enkeltstående getRandomPromise operationen er fuldført')); // Udføres, uanset om løftet blev opfyldt eller afvist
