import {addTwoNumbers} from './solution';
import {ListNode} from "./ListNode";

function listToArray(list: ListNode | null): number[] {
    const result = [];
    let pointer = list;

    while (pointer) {
        result.push(pointer.val);
        pointer = pointer.next;
    }

    return result
}

describe('addTwoNumbers', () => {
    it('for[2,4,3] & [5,6,4] returns [7,0,8]', () => {
        const list = addTwoNumbers(
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4))),
        );

        expect(listToArray(list)).toEqual([7, 0, 8]);
    })

    it('for[0] & [0] returns [0]', () => {
        const list = addTwoNumbers(
            new ListNode(0),
            new ListNode(0),
        );

        expect(listToArray(list)).toEqual([0]);
    })

    it('for[9,9,9,9,9,9,9] & [9,9,9,9] returns [8,9,9,9,0,0,0,1]', () => {
        const list = addTwoNumbers(
            new ListNode(9,
                new ListNode(9,
                    new ListNode(9,
                        new ListNode(9,
                            new ListNode(9,
                                new ListNode(9,
                                    new ListNode(9)
                                )
                            )
                        )
                    )
                )
            ),
            new ListNode(9,
                new ListNode(9,
                    new ListNode(9,
                        new ListNode(9)
                    )
                )
            )
        );

        expect(listToArray(list)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    })
});