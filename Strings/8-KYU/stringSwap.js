function swapVowelCase(str) {
    let vowels = "aeouiAEOUI";
    let result = "";
    for (let char of str) {
        if (vowels.includes(char)) {
            char === char.toUpperCase() ? char = char.toLowerCase() : char = char.toUpperCase()
            result += char
        } else result += char;


    }
    return result;
}

// https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript