const removeFromArray = function(arr) {
    for(let i = 0; i < arr.length; i++)
    {
        for (let j = 1; j < arguments.length; j++)
        {
            if (arr[i] === arguments[j])
            {
                delete arr[i];
            }
        }
    }

    return arr.filter(item => item !== undefined);
};

// Do not edit below this line
module.exports = removeFromArray;
