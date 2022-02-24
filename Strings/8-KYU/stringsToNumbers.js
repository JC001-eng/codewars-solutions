function toNumberArray(stringarray) {
    return stringarray.map(Number);
}

toNumberArray(["1.1", "2.2", "3.3"])
// Should output [1.1,2.2,3.3];