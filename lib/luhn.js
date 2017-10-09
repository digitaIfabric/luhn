// var input = process.argv[2]
//
// var IN = 7992739871;
//
// function check(IN){
//
//     var digits = String(num).split('');
//     var sum = 0;
//     var length = digits.length;
//     var mod = 0;
//
//     for (let i = length - 1; i => 0; i--) {
//         if (i === 0) {
//             x = Number(digits[i]);
//             digits[length] = 0;
//             console.log(digits);
//         }
//
//         sum = digits.reduce((A, B) => A + Number(B))
//
//
//         mod = sum % 10;
//
//
//     }
//     return digits
// }
//
//
// module.exports = check;

// ======================================================================================================================

var IN = 7992739871;

function check(IN){

    var digits = String(IN).split('');
    //digits.splice(-1,1)
    //digits.push('x');
    console.log(digits);
    var sum = 0;
    //var x = 0;
    var modulo = 0;
    var length = digits.length;

    //Convert string to number
    //x = Number(digits[i]);

    // Double every second digit
    for (var i = length - 1; i >= 0; i--){
        if ((i+1) % 2 === 0)
            digits[i] = 2 * digits[i];
    }
    console.log(digits);

    // Create sum digit array
    var sumDigits = digits;
    for (var i = length - 1; i >= 0; i--){
        sumDigits[i] = Number(sumDigits[i]);
        if (sumDigits[i] >= 10){
            sumDigits[i] = String(sumDigits[i]).split('');
            var dig = sumDigits[i];
            sumDigits[i] = Number(dig[0]) + Number(dig[1]);
            }
        sum = sumDigits.reduce((A, B) => A + B);
    }
    console.log(sum);
    console.log(sumDigits);

    // Calculate modulo 10;
    modulo = sum % 10;

    if (modulo === 0){
        return true;
    } else if (modulo !== 0){
        return false;
    }

}

console.log(check(IN));

// ======================================================================================================================
