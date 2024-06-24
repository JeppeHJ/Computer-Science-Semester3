// Den givne get-funktion til at hente data fra en URL ved hjælp af en GET-request.
async function get(url) {
    // Udfører en fetch-request og venter på responsen
    const response = await fetch(url);
    
    // Tjekker om respons-status er 200 (OK), ellers kaster den en fejl
    if (response.status !== 200)
        throw new Error(response.status);
    
    // Parser responsen som JSON og returnerer den
    return await response.json();
}

// Funktion til at hente og vise tre citater ved hjælp af ovenstående get-funktion.
async function fetchAndDisplayQuotes() {
    try {
        // Henter tre citater parallelt ved hjælp af Promise.all
        const quotes = await Promise.all([
            get('https://www.tronalddump.io/random/quote'),
            get('https://www.tronalddump.io/random/quote'),
            get('https://www.tronalddump.io/random/quote')
        ]);

        // Opbygger en HTML-streng med citaterne ved at mappe over arrayet af citater.
        // For hvert citat konverteres det til et paragraf-element med værdien og tags.
        const quotesHtml = quotes.map(quote => 
            `<p>${quote.value} <strong>- ${quote.tags.join(', ')}</strong></p>`
        ).join('');

        // Indsætter den byggede HTML-streng i div-elementet med id 'result'
        document.getElementById('result').innerHTML = quotesHtml;
    } catch (error) {
        // Hvis der opstår en fejl under fetch, vises en fejlbesked i div-elementet
        document.getElementById('result').innerHTML = `<p>Fejl ved indlæsning af citater: ${error.message}</p>`;
    }
}

// Tilføjer en event listener til knappen med id 'loadQuotes'.
// Når knappen klikkes, udføres funktionen 'fetchAndDisplayQuotes'
document.getElementById('loadQuotes').addEventListener('click', fetchAndDisplayQuotes);

// Indlæser citater automatisk, når siden indlæses for første gang.
fetchAndDisplayQuotes();
