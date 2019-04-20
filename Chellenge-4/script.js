
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    const arr = ar.sort((a, b) => a - b);
    let pair = 0;
    let j;
    let k;
    const pairs = [];
    const rem = [];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        //// checking if ( current iteration element  === the last iteration element ) ... then break and go to the next element.
    /*    if (arr[i] != arr[i - 1] && arr[i] != arr[i - 2] && arr[i] != arr[i - 3] && arr[i] != arr[i - 4] && arr[i] != arr[i - 5] && arr[i] != arr[i - 6] && arr[i] != arr[i - 7] && arr[i] != arr[i - 8] && arr[i] != arr[i - 9] && arr[i] != arr[i - 10] && arr[i] != arr[i - 11]) { */
        if (arr[i] != arr[i - 1]) {
            /// part1: iterating from the current index n[i] to the end of the array ( n.length - i+1 ) and ( n.length - i+1 ) = n[-1]
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    pair += 1;
                    //console.log("got a pair1 at " + i + ' -> ' + j);
                    //n = n.splice();
                    //n.filter(function(el){
                    //    if(el != n[j]) {return true;};
                    //});
                    rem.push(arr[j]);

                    //console.log(n);
                };
            };
            /// part2: iterating from the zeroth position to the index n[i] and after that i will be covered the whole array 
            for (k = 0; k < i; k++) {
                //console.log("reached loop 2");
                if (arr[i] === arr[k]) {
                    pair += 1;
                    //console.log("got a pair2 at " + i + ' -> ' + k);
                    rem.push(arr[k]);
                };
            };

            //console.log(rem);
            /*        for(let l=0;l<rem.length;l++){
                        for(let s=0;s<n.length;s++){
                            if(rem[i] === n[s]){
                                n.slice(n[s], 1);
                            };
                        };
                    };
            */


            //// handling the pairs when it is an even or odd number situations: 
            //console.log(pair);
            if (pair > 1) {
                pair++;
                if (pair % 2 != 0) { pair--; pair = parseInt(pair / 2); }
                else { pair = parseInt(pair / 2); };
            };
            //console.log(pair);
            pairs.push(pair);
            pair = 0;
            //console.log(pairs);
            //n = n.slice(n[i], )
            //if( ((pairs+1) % 2) == 0){pairs /= 2; console.log(pairs);};
            //if( ((pairs+1) % 2) != 0) {pairs = parseInt(pairs / 2); console.log(pairs);}; /* = parseInt((pairs+1)/2); */        
            //console.log("\n\n\n\n");
        };
    };

    //// summing the elements inside pairs array to produce the total numbers of pairs.
    for (let m = 0; m < pairs.length; m++) {
        total += pairs[m];
    };
    //console.log(total);
    return total;
}


// testing...
console.log(sockMerchant(30, [1, 2, 1, 3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2])) /// return 11
