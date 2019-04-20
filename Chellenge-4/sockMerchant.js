function sockMerchant(n, ar) {
	// Sorting the color array ar asendingly.
    const arr = ar.sort((a, b) => a - b);
    let pair = 0;
    const pairs = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        //// Checking if ( current iteration element  === the last iteration element ) ... then break and go to the next element.
        if (arr[i] != arr[i - 1]) {
            /// Part1: Iterating from the current index n[i] to the end of the array ( n.length - i+1 ) and ( n.length - i+1 ) = n[-1]
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    pair += 1;
                };
            };
            /// Part2: Iterating from the zeroth position to the index n[i] and after that i will be covered the whole array 
            for (k = 0; k < i; k++) {
                if (arr[i] === arr[k]) {
                    pair += 1;
                };
            };
            //// Handling the pairs when it's an even or odd number: 
            if (pair > 1) {
                pair++;
                if (pair % 2 != 0) { pair--; pair = parseInt(pair / 2); }
                else { pair = parseInt(pair / 2); };
            };
            pairs.push(pair);
            pair = 0;
        };
    };

    //// Summing the elements inside pairs array to produce the total numbers of pairs.
    for (let m = 0; m < pairs.length; m++) {
        total += pairs[m];
    };
    return total;
}
