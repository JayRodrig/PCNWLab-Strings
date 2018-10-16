/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = str => {
    const num = str.length;
    if(num % 2 !== 0) return str + '#';
    return str;
}

console.log(makeEven('Yes Sir'), 'Yes Sir#');
console.log(makeEven('Something'), 'Something#');
console.log(makeEven('Nose'), 'Nose');
console.log(makeEven('Okay'), "Okay");
console.log('**********************************************************************************')
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = str => {

    return str[str.length - 1];

}

console.log(getLastChar('pamela'), 'a');
console.log(getLastChar('Jay'), 'y');
console.log(getLastChar('Serge'), 'e');
console.log(getLastChar('Jennifer'), 'r');
console.log('**********************************************************************************')

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = str => {
    const notEnough = 'Not enough characters!'
    if(str.length <= 2){
        return notEnough;
    }
    return str.charAt(2);
}

console.log(get3rdChar('pa'), 'Not enough characters!');
console.log(get3rdChar('Jay'), 'y');
console.log(get3rdChar('Al'), 'Not enough characters!');
console.log(get3rdChar('Jorge'), 'r');
console.log('**********************************************************************************')
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

const get3rdCharFromEnd = str => {
    if(str.length <= 2) return 'Not enough characters!'
    return str.slice(-3, -2);
}

console.log(get3rdCharFromEnd('taq'), 't');
console.log(get3rdCharFromEnd('mo'), 'Not enough characters!');
console.log(get3rdCharFromEnd('taq karim'), 'r');
console.log(get3rdCharFromEnd('Jose'), 'o');
console.log('**********************************************************************************')



/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

const startVowel = input => {
    const lowerCasedInput = input.toLowerCase();
    if(lowerCasedInput.charAt(0) === 'a') return true;
    if(lowerCasedInput.charAt(0) === 'e') return true;
    if(lowerCasedInput.charAt(0) === 'i') return true;
    if(lowerCasedInput.charAt(0) === 'o') return true;
    if(lowerCasedInput.charAt(0) === 'u') return true;
    return false;
}

const startsWithVowel = str => startVowel(str);

console.log(startsWithVowel('taq'), 'false');
console.log(startsWithVowel('asdf'), 'true');
console.log(startsWithVowel('andy'), 'true');
console.log(startsWithVowel('Andy'), 'true');
console.log(startsWithVowel('Jose'), 'false');
console.log('**********************************************************************************')

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endVowel = input => {
    const lowerCasedInput = input.toLowerCase();
    if(lowerCasedInput.charAt(input.length - 1) === 'a') return true;
    if(lowerCasedInput.charAt(input.length - 1) === 'e') return true;
    if(lowerCasedInput.charAt(input.length - 1) === 'i') return true;
    if(lowerCasedInput.charAt(input.length - 1) === 'o') return true;
    if(lowerCasedInput.charAt(input.length - 1) === 'u') return true;
    return false;
}

const endsWithVowel = str => endVowel(str);

console.log(endsWithVowel('taq'), 'false');
console.log(endsWithVowel('asdfa'), 'true');
console.log(endsWithVowel('andy'), 'false');
console.log(endsWithVowel('Andy'), 'false');
console.log(endsWithVowel('Jose'), 'false');
console.log('**********************************************************************************')

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const hasVowels = str => str.match(/[aeiou]/) ? true : false; 

console.log(hasVowels('tqssrrr'), 'false');
console.log(hasVowels('asdfa'), 'true');
console.log(hasVowels('andy'), 'true');
console.log(hasVowels('ndae'), 'true');
console.log(hasVowels('Js'), 'false');
console.log('**********************************************************************************')

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const hasUpperCase = str => str.match(/[A-Z]/) ? true : false;

console.log(hasUpperCase('Tqssrrr'), 'true');
console.log(hasUpperCase('asdfa'), 'false');
console.log(hasUpperCase('anDy'), 'true');
console.log(hasUpperCase('ndae'), 'false');
console.log(hasUpperCase('js'), 'false');
console.log('**********************************************************************************')

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const isPalindromic = str => {
    const re = /[^A-Za-z0-9]/g;
    lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    
    return lowRegStr === reverseStr;
}

console.log(isPalindromic('A man, a plan, a canal. Panama'), 'Should return true');
console.log(isPalindromic('Race Car'), 'This should return true');
console.log(isPalindromic('I went to work today'), 'This should return false');
console.log(isPalindromic('taq karim'), 'This should return false');
console.log('********************************************************************************');


/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

const getInitials = str => {
    const spaceChar = str.match(/[' ']/);
    const secondInit = str.indexOf(spaceChar) + 1;
    const firstInit = str.charAt(0);
    return firstInit + str.charAt(secondInit);
}

console.log(getInitials('Jose Rodriguez'), 'This should return JR');
console.log(getInitials('Jennifer Jerez'), 'This should return JJ');
console.log(getInitials('Yudy Cabreja'), 'This should return YC');
console.log(getInitials('Ricky Rodriguez'), 'This should return RR');
console.log('********************************************************************************');

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/*
const isPerfect = str => {
    //has more than three characters
    
    //the three middle characters are arranged such that first character is vowel,
    //second character is consonant and last character is another vowel
    
    //The three middle characters are palindromic
    
    const midChar = (Math.floor(str.length / 2));
    const threeMidChars = str.slice((midChar - 1, midChar + 1));
    console.log(threeMidChars);
    // if(str.length >= 3 && midChar - 1 === str.match(/[aeiou]/) && 
        // str.charAt(midChar) !== str.match(/[aeiou]/) && str.charAt(midChar + 1) === str.match(/[aeiou]/) &&
            //  ) return true;

}

console.log(isPerfect('asdfaeKeccccc'));
// console.log(isPerfect());
// console.log(isPerfect());
// console.log(isPerfect());
console.log('********************************************************************************');
*/


/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/


const strMasher = (str1, str2) => {
    const firstHalf = str1.slice(0, Math.ceil(str1.length / 2));
    const secondHalf = str2.slice(Math.ceil(str1.length /2));
    return firstHalf + str2 + secondHalf;
}


console.log(strMasher('help', 'me'), 'hemelp');
console.log(strMasher('hello', 'wrold'), 'helwroldlo');
// console.log(strMasher());
// console.log(strMasher());
// console.log(strMasher());
console.log('********************************************************************************');
