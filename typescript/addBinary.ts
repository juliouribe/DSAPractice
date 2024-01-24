function addBinary(a: string, b: string): string {
    // Set i and j to the last index.
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry === 1) {
        let sum = carry;
        // While we still have string length, use the index value to get a 0 or 1.
        // Also decrement the index pointers.
        if (i >= 0) sum += parseInt(a[i--]);
        if (j >= 0) sum += parseInt(b[j--]);
        // Add the 2, 1, or 0.
        result = (sum % 2) + result;
        // If we get two, we can carry it over.
        carry = Math.floor(sum / 2);
    }

    return result;
}
