//Palindrome
function longestPalindrome(str) {

    let longest = "";

    for (let i = 0; i < str.length; i++) {

        // Odd length palindrome
        let left = i;
        let right = i;

        while (left >= 0 && right < str.length && str[left] === str[right]) {

            if (right - left + 1 > longest.length) {
                longest = str.slice(left, right + 1);
            }

            left--;
            right++;
        }

        // Even length palindrome
        left = i;
        right = i + 1;

        while (left >= 0 && right < str.length && str[left] === str[right]) {

            if (right - left + 1 > longest.length) {
                longest = str.slice(left, right + 1);
            }

            left--;
            right++;
        }
    }

    return longest;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("abacaba"));

// template literal 

function render(text, data) {

    return text.replace(/\{\{(.*?)\}\}/g, function(match, key) {

        key = key.trim();

        if (data[key] !== undefined) {
            return data[key];
        }

        return "[missing:" + key + "]";
    });
}

console.log(
    render(
        "Hello {{name}}, {{count}} msgs",
        {
            name: "Arjun",
            count: 5
        }
    )
);

console.log(
    render(
        "Hi {{name}}, age {{age}}",
        {
            name: "Ali"
        }
    )
);

//

function groupAnagrams(words) {

    let map = new Map();

    for (let word of words) {
        let key = word.split('').sort().join('');

        
        if (!map.has(key)) {
            map.set(key, []);
        }

    
        map.get(key).push(word);
    }

    
    return Array.from(map.values());
}

let result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

console.log(result);