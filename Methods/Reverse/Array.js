const reverseStringArrayNoExtraMemory = array => {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let holder = array[end];
        array[end] = array[start]
        array[start] = holder;
        start++;
        end--;
    }
    return array;
}