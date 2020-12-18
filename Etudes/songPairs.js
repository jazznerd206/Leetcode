const time = [30,20,150,100,40];
// const time = [60,60,60]

const checkForPairs = (array) => {
    let map = new Map();
    let num = 0;
    time.forEach(value => {
        let remainder = value % 60;
        let addBack = remainder == 0 ? 0 : 60 - remainder;
        
        // match the needed numbers in map
        if(map.get(addBack)) {
            num += map.get(addBack);
        }
        console.log(num);

        map.get(remainder) ? map.set(remainder, map.get(remainder) + 1) : map.set(remainder, 1);
    });
    return num;
    // let totals = 0;
    // for (i=0; i<array.length; i++) {
    //     for (j=1; j<array.length; j++) {
    //         if (i<j && (array[i] + array[j]) % 60 === 0) {
    //             totals++;
    //         }
    //     }
    // }
    // return totals;
}
console.log(checkForPairs(time));