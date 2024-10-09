function isPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
};