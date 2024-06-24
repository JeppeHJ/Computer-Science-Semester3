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
                let temp = list[j];  // Gemmer det aktuelle element midlertidigt
                list[j] = list[j + 1];  // Bytter elementerne
                list[j + 1] = temp;  // Sætter det gemte element på den næste position
            }
        }
    }
    // Returnerer den sorterede liste
    return list;
}
