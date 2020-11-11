const input = 5;

const generate = input => {
    let pascalsTriangle = [];

    for (i = 0; i < input; i++) {
        if ( i === 0 ) {
            pascalsTriangle.push([1]);
        } else {
            let row = [1];
            row[i] = 1;
            for (let j = 1; j < i; j++) {
                row[j] = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
            }
            pascalsTriangle.push(row);
            }
        }
    return pascalsTriangle;
}
generate(input);