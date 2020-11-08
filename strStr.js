const haystack = 'hello'; // index 2
const needle = 'll';

const haystack1 = ''; // index 0
const needle2 = 'a';

const haystack3 = 'aaaaa'; // index -1
const needle4 = 'bba';

const haystack5 = 'aaa';
const needle6 = 'aaaa';

const haystack7 = 'a';
const needle8 = '';

const haystack9 = '';
const needle10 = '';

const haystack11 = 'mississippi';
const needle12 = 'issip'


const strStr = (haystack, needle) => {
    if (haystack !== '' && needle === '') {
        console.log(0)
        return 0
    } else if (needle !== '' && haystack === '') {
        console.log(-1);
        return -1;
    }
    while (haystack !== '' && needle !== '') {
        if (haystack.includes(needle)) {
            console.log(haystack.indexOf(needle))
            return haystack.indexOf(needle);
        } else if (haystack.includes(needle) === false) {
            console.log(-1)
            return -1
        } else if (haystack === '') {
            return 0;
        } else if (needle === '') {
            return 0;
        }
    }
    console.log(0)
    return 0;
}
// console.log('should return as 2');
// strStr(haystack, needle);
// console.log('should return as 0');
// strStr(haystack1, needle2);
// console.log('should return as -1');
// strStr(haystack3, needle4);
// console.log('should return as -1');
// strStr(haystack5, needle6);
// console.log('should return as 0');
// strStr(haystack7, needle8);
// console.log('should return as 0');
// strStr(haystack9, needle10);
console.log('should return as 4');
strStr(haystack11, needle12);