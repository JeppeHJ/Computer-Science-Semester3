let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let list2 = [9, 1, 3, 15, 0, 5, 4, 10, 11];

function bubbleSort(list) {
    for (let i = list.length -1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j+1] = temp;
            }
        }
    }
    return list;
}

bubbleSort(list);
bubbleSort(list2);

function mergeSort(sortedArray1, sortedArray2) {
    let mergedArray = [];
    let index1 = 0; // Index for at gennemgå sortedArray1
    let index2 = 0; // Index for at gennemgå sortedArray2
    
    // Fortsæt, så længe der er elementer i begge arrays
    while (index1 <= sortedArray1.length - 1 && index2 <= sortedArray2.length - 1) {
        // Sammenligner elementer fra begge arrays
        if (sortedArray1[index1] < sortedArray2[index2]) {
            // Hvis elementet i sortedArray1 er mindre, tilføj det til mergedArray
            mergedArray.push(sortedArray1[index1]);
            index1++; // Flyt til det næste element i sortedArray1
        } else if (sortedArray1[index1] > sortedArray2[index2]) {
            // Hvis elementet i sortedArray2 er mindre, tilføj det til mergedArray
            mergedArray.push(sortedArray2[index2]);
            index2++; // Flyt til det næste element i sortedArray2
        } else {
            // Hvis elementerne er ens, tilføj begge til mergedArray
            mergedArray.push(sortedArray1[index1]);
            mergedArray.push(sortedArray2[index2]);
            index1++;
            index2++;
        }
    }

    // Tilføj resterende elementer fra sortedArray1, hvis der er nogen
    while (index1 <= sortedArray1.length - 1) {
        mergedArray.push(sortedArray1[index1]);
        index1++;
    }

    // Tilføj resterende elementer fra sortedArray2, hvis der er nogen
    while (index2 <= sortedArray2.length - 1) {
        mergedArray.push(sortedArray2[index2]);
        index2++;
    }

    // Returner det samlede og sorteret array
    return mergedArray;
}


console.log(mergeSort(list, list2))