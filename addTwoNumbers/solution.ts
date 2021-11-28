class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode();
    let l1Pointer = l1;
    let l2Pointer = l2;
    let resultPointer = result;
    let carry = 0;

    while (Boolean(l1Pointer) || Boolean(l2Pointer)) {
        const calculated = (l1Pointer?.val || 0) + (l2Pointer?.val || 0) + carry;
        carry = Math.floor(calculated / 10);

        resultPointer.next = new ListNode(calculated % 10);
        resultPointer = resultPointer.next;

        l1Pointer = l1Pointer?.next || null;
        l2Pointer = l2Pointer?.next || null;
    }

    if(carry) {
        resultPointer.next = new ListNode(carry);
    }

    return result.next;
};

function addTwoLinkLists(l1: ListNode | null, l2: ListNode | null, carry:number = 0): ListNode | null {
    if(l1 === null && l2===null) {
        if(carry >0){
            return new ListNode(1);
        }
        return null
    }
    else if(l1===null && carry === 0) return l2;
    else if(l2===null && carry === 0) return l1;

    let newVal = (l1 ? l1.val:0) + (l2?l2.val:0) + carry;

    return new ListNode(newVal % 10, addTwoLinkLists(l1 ? l1.next:null, l2 ? l2.next: null, newVal > 9 ? 1: 0));
}

function addTwoNumbersSlow(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoLinkLists(l1, l2);
};