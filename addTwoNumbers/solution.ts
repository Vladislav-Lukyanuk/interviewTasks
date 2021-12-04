import {ListNode} from "./ListNode";

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