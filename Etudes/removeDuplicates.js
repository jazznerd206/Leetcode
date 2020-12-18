numsArray = [1,1,2]

const removeDuplicates = (head) => {
    if (head===0) {
        return 0;
    }
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head
}

removeDuplicates(numsArray);