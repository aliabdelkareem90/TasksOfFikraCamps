/* 
    -Task no. : 2
    -Task Description: A function conevrts an array of numbers to an array of numbers in written form
    -Author: Ali Abdulkareem Shamit
*/

function convertToWord(numbers) {
    // Array to hold ones in written form, first element is empty so that if number contains zero will not printed spreatly
    // (e.g. 20 will be printed twenty not twenty zero)
    var ones = [
        " ", " ONE", " TWO", " THREE", " FOUR", " FIVE", " SIX", " SEVEN", " EIGHT", " NINE", " TEN", " ELEVEN",
        " TWELVE", " THIRTEEN", " FOURTEEN", " FIFTEEN", " SIXTEEN", " SEVENTEEN", " EIGHTEEN", " NINETEEN"];
    // Array to hold tens in written form, first two elements are empty to equal the numbers array's indexes,
    // and avoid printing zero or ten conversion
    var tens = [" ", " ", " TWENTY", " THIRTY", " FOURTY", " FIFTY", " SIXTY", " SEVENTY", " EIGHTY", " NINETY"];
    // Array to store converted numbers
    var words = []
    // loop throw every element of the original array
    for (let i = 0; i < numbers.length; i++) {
        // if element number equals zero, store word "Zero" with the same index in words array
        if (numbers[i] === 0)
            words[i] = "Zero"
        // if number is in range of 1 to 19, store it's written form from ones array
        else if (0 < numbers[i] && numbers[i] < 20)
            words[i] = ones[numbers[i]]
        // if number is greater than 19 and less than 100, store written form from tens array
        else if (19 < numbers[i] && numbers[i] < 100)
            words[i] = tens[(numbers[i] - (numbers[i] % 10)) / 10] + " " + ones[numbers[i] % 10]
    }
    console.log(words)  // print the result array in the console
}

var numbers = [20, 77, 0];
convertToWord(numbers)