function isPalindrome(s: string): boolean {
    let l = 0;
    let r = (s.length - 1);

    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) {  // Note 1, 2
            l += 1;
        }
        while (l < r && !isAlphaNumeric(s[r])) {
            r -= 1;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }

        l += 1;
        r -= 1;
    }
    return true;
};

function isAlphaNumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) ||   // 0-9
        (code >= 65 && code <= 90) ||   // A-Z
        (code >= 97 && code <= 122);    // a-z
}