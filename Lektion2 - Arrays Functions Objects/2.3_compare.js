// compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.

function compare(s1, s2) {
    if (s1 > s2) {
        return 1;
    } else if (s1 === s2) {
        return 0;
    } else {
        return -1;
    }
}

let string1 = "Jeppe";
let string2 = "jeppe";

console.log(compare(string1, string2));

function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    } else if (s1.length === s2.length) {
        return 0;
    } else {
        return -1;
    }
}

console.log(compareLen(string1, string2));

function compareIgnoreCase(s1, s2) {
    if (s1.toLowerCase() > s2.toLowerCase()) {
        return 1;
    } else if (s1.toLowerCase() === s2.toLowerCase()) {
        return 0;
    } else {
    return -1;
    }
}

console.log(compareIgnoreCase(string1, string2));


let list2 = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(list, compareFunction) {
    // Ydre løkke: går baglæns gennem listen
    for (let i = list.length - 1; i >= 0; i--) {
        // Indre løkke: går gennem listen op til det aktuelle element i den ydre løkke
        for (let j = 0; j <= i - 1; j++) {
            // Sammenligner hvert par af tilstødende elementer
            if (compareFunction(list[j], list[j + 1]) === 1) {
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

console.log(bubbleSort(list2, compare));