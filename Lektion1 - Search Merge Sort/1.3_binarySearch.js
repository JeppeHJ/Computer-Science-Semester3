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

console.log(binarySearch(list, 4));