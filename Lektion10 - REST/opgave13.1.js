// opgave12.1.js

// URL til USGS Earthquake Data Feed for jordskælv med en størrelse på 4.5 eller højere i den seneste uge.
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

// Funktionen genererer en HTML tabel ud fra en liste af jordskælv.
function generateEarthquakeTable(earthquakes) {
    let html = '<table>'; // Starter en ny HTML tabel
    for (let quake of earthquakes) {
        // Dekomponerer jordskælvets egenskaber for nemmere adgang
        let { time, place, mag } = quake.properties;

        // Tilføjer en række til tabellen for hvert jordskælv med dets størrelse, placering og tidspunkt
        html += '<tr><td>' + mag +
            '</td><td>' + place +
            '</td><td>' + new Date(time).toLocaleString() + // Konverterer UNIX-timestamp til et læsbart format
            '</td></tr>\n';
    }
    html += '</table><br><div></div>'; // Afslutter HTML-tabellen
    return html; // Returnerer den genererede HTML-streng
}

// Denne funktion filtrerer og sorterer en liste af jordskælv baseret på deres størrelse.
function selectEarthquakes(earthquakes){
    return earthquakes.features
    .filter(quake => quake.properties.mag >= 5) // Filtrer jordskælv, der har en størrelse på 5 eller højere
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag); // Sorterer jordskælv fra højeste til laveste størrelse
}

// Asynkron hovedfunktion til at håndtere datahentning og visning.
async function main(earthquakeUrl) {
    let earthquakes;
    try {
        earthquakes = await get(earthquakeUrl); // Forsøger at hente jordskælvsdata asynkront
    } catch (fejl) {
        console.log(fejl); // Logger en fejl, hvis der opstår en under datahentning
    }
    earthquakes = selectEarthquakes(earthquakes); // Filtrer og sorter hentede jordskælvsdata
    document.body.innerHTML = generateEarthquakeTable(earthquakes); // Opdaterer body af HTML-dokumentet med den genererede tabel
}
main(earthquakeUrl); // Kalder hovedfunktionen med URL'en
