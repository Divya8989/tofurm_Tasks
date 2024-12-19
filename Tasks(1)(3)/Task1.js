function longest(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();
    let longestSubstring = "";
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.substring(start, end + 1);
        }
    }
    console.log(`Output: ${maxLength}`);
    console.log(` The longest substring without repeating characters is "${longestSubstring}"`);
}
// Test cases
longest("ABCBC");
longest("AAA");

