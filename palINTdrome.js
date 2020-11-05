var isPalindrome = function(x) {
    const string = x.toString();
    const revString = string.split('').reverse().join('');
    console.log(string);
    console.log(revString);
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < string.length; j++) {
            while (string[i] = string[j]) {
                console.log( true)
            }
        }
    }
};

isPalindrome(12321)