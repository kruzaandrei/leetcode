function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;

    while (j < t.length && i < s.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
}
