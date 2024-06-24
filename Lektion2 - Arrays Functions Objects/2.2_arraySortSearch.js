let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}

//Udvid eksemplet bubbleSort.js med en binær søgning på indholdet af list, efter at list er blevet sorteret.
// Test dernæst med forskellige tal. Udskriv med console.log tallets position i listen eller -1, hvis elementet
// ikke er i listen

function binarySearch(list, number) {
    // Initialiserer start- og slutindekserne
    let start = 0;
    let end = list.length - 1;

    // Fortsætter så længe startindekset er mindre eller lig med slutindekset
    while (start <= end) {
        // Beregner midtpunktet af det aktuelle søgeområde og afrunder nedad
        let middle = Math.floor((start + end) / 2);

        // Tjekker om elementet på midtpunktet er det vi søger
        if (list[middle] === number) {
            // Returnerer indekset, hvis det er det ønskede tal
            return middle;
        } else if (list[middle] < number) {
            // Hvis elementet er mindre end det ønskede tal, justerer vi startindekset
            // for at fokusere på den højre halvdel af listen
            start = middle + 1;
        } else {
            // Hvis elementet er større end det ønskede tal, justerer vi slutindekset
            // for at fokusere på den venstre halvdel af listen
            end = middle - 1;
        }
    }

    // Returnerer -1 hvis tallet ikke findes i listen
    return -1;
}

//console.log(binarySearch(list, 4));


// Lav en ny udgave af bubbleSort.js, hvor der nu sorteres på et array af tekststrenge. Hvor meget skal der ændres?

let list2 = ["Jeppe", "Emilie", "Arne", "Åse", "Ebbe"];

function bubbleSort(list) {
    // Ydre løkke: går baglæns gennem listen
    for (let i = list.length - 1; i >= 0; i--) {
        // Indre løkke: går gennem listen op til det aktuelle element i den ydre løkke
        for (let j = 0; j <= i - 1; j++) {
            // Sammenligner hvert par af tilstødende elementer
            if (list[j] > list[j + 1]) {
                // Hvis de er i forkert rækkefølge, bytter vi dem
                swap(list, j, j+1);
            }
        }
    }
    // Returnerer den sorterede liste
    return list;
}

function swap(list, currentElementIndex, elementToSwapIndex) {
    let temp = list[currentElementIndex];  // Gemmer det aktuelle element midlertidigt
    list[currentElementIndex] = list[elementToSwapIndex];  // Bytter elementerne
    list[elementToSwapIndex] = temp;  // Sætter det gemte element på den næste position
    return list;
}

console.log(bubbleSort(list2));