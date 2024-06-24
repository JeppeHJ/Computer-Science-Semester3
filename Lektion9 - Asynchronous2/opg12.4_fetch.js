// Definerer en funktion, der returnerer et Promise
function getRandomPromise() {
    // Returnerer et nyt Promise objekt
    return new Promise((resolve, reject) => {
        // Bruger fetch til at hente tilfældige tal fra random.org
        fetch("https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new")
            .then(response => response.text()) // Konverterer svaret til tekst
            .then(text => {
                // Parser teksten til et heltal
                const randomNumber = parseInt(text.trim(), 10);

                // Her følger logikken for at afgøre, om vi skal resolve eller reject Promise
                // Hvis tallet er mindre end 7, resolve Promise
                if (randomNumber < 7) {
                    resolve("Resolved: Tilfældigt tal er " + randomNumber);
                } 
                // Hvis tallet er større end 7, reject Promise
                else if (randomNumber > 7) {
                    reject("Rejected: Tilfældigt tal er " + randomNumber);
                } 
                // Speciel håndtering, hvis tallet er præcis 10 - kaster en fejl
                else if (randomNumber === 10) {
                    throw new Error("Exception: Tilfældigt tal er 10");
                } 
                // Hvis tallet er 7, reject Promise
                else {
                    reject("Rejected: Tilfældigt tal er 7");
                }
            })
            .catch(e => {
                // Håndter eventuelle fejl opstået under fetch eller parsing
                reject("Exception caught: " + e.message);
            });
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
