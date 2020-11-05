const l1 = [1,2,4];
const l2 = [1,3,4];

const mergeTwoSortedLists = (l1, l2) => {
    const node = new ListNode(null, null);
    let current = node;

    while(l1 !== null && l2 !== null) {
        if(l1.data !== null && l2.data !== null) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l2;
    } else if (l2 !== null) {
        current.next = l1;
    }

    return current.next;
}

mergeTwoSortedLists(l1, l2);