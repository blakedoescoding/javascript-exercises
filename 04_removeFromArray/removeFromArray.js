const removeFromArray = function(array, ...number) {
    const answer = [];
    //loop through array
    for (let i = 0; i < array.length; i++){
        //if array DOES NOT EQUAL the number
        //then push those numbers into a new array
        //so it will not include the number 
        if (array[i] !== number){
            answer.push(array[i]);
        }
    }


    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
