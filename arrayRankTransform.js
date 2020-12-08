const array = [10,30,20,50,40];

const arrayRankTransform = arr => {
    const newArray = arr;
    console.log(`array ${newArray}`)
    const filter = newArray.sort((a,b) => {return a - b;});
    console.log(`filtered array ${filter}`)
    const map = new Map();
    for (i = 0; i < filter.length; i++) {
        map.set(filter[i], i);
    }
}

console.log(arrayRankTransform(array))