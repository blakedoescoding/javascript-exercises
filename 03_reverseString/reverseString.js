const reverseString = function(string) {
    //splits string into array of chars
    //reverses the array
    //join the chars back into string
    return string.split('').reverse().join(''); 



    //Another way, starts with empty string,
    //starts at last letter and goes backwards
    // let answer = '';
    // for (let i = string.at(-1); i >= 0; i--){
    //     answer += string[i];
    // }
    // return answer;
    
};

// Do not edit below this line
module.exports = reverseString;



