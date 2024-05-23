const reverseString = function(input) {
    let arr = input.split("");
    let reverse = "";
    for (let i = input.length - 1; i >= 0; i--)
    {
        reverse = reverse + arr[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
