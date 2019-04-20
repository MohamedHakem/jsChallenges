// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const arr = ar.sort((a, b) => a - b);
    let pair = 0;
    const pairs = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        //// checking if ( current iteration element  === the last iteration element ) ... then break and go to the next element.
        if (arr[i] != arr[i - 1]) {
            /// part1: iterating from the current index n[i] to the end of the array ( n.length - i+1 ) and ( n.length - i+1 ) = n[-1]
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    pair += 1;
                };
            };
            /// part2: iterating from the zeroth position to the index n[i] and after that i will be covered the whole array            
            for (k = 0; k < i; k++) { 
                if (arr[i] === arr[k]) {
                    pair += 1;
                };
            };
            //// handling the pairs when it is an even or odd number for each general iteration: 
            if (pair > 1) {
                pair++;
                if (pair % 2 != 0) { pair--; pair = parseInt(pair / 2); }
                else { pair = parseInt(pair / 2); };
            };
            // appending the number of pairs for each element as general iteration
            pairs.push(pair);
            // preparing the process again for the next element (general iteratio) so we need to put our variable pair = 0 again.
            pair = 0; 
        };
    };
    //// summing the elements inside pairs array to produce the total numbers of pairs.    
    for (let m = 0; m < pairs.length; m++) {
        total += pairs[m];
    };
    return total;
}
// testing...
console.log(sockMerchant(30, [1, 2, 1, 2, 4, 5, 4, 5, 4, 5, 5, 3, 2, 2, 1, 1, 2, 3,3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2])) ///  14
