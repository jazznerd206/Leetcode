const n = 100;

const countPrimes = num => {
    if (num <= 2) return 0;
    const set = new Set();
    const primes = [2];
    for (i = 3; i < num; i++) {        
        if (i % 2 !== 0) {
            let count = 0;
            while (count === 0) {
                primes.forEach(num => {
                    if (i % num === 0) count ++;   
                })
            }
            if (count === 0) primes.push(i);
        }
    }
    primes.forEach(num => set.add(num))
    return set.size;
}

console.log(countPrimes(n));