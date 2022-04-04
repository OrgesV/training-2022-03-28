let num1 = 32243
function reverseNumber(num){
    let str = num.toString()
    let rev = str.split("").reverse().join("")
    console.log("1:", parseInt(rev))
}
reverseNumber(num1)
let pal1 = "ollo"
let pal2 = "paap"
let pal3 = "hello"
function isPalindrome(val1){
    let rev = val1.split("").reverse().join("")
    if(rev == val1){
        console.log("2:",true)
    }else{
        console.log("2:",false)
    }
}
isPalindrome(pal1)

let t = "dog"

function allComb(str){
    let combArr = []
    for(let i = 0; i < str.length;i++){
        let temp = ""
        for(let j = i; j < str.length;j++){
            temp += str[j]
            combArr.push(temp)
        }
        
    }
   console.log("3:",combArr)
}
allComb(t)

let alphabetical = "webmaster"

function alphabeticalOrder(str){
    console.log("4:",str.split("").sort().join(""))
}

alphabeticalOrder(alphabetical);

let up = "the quick brown fox"

function upperString(str){
    let temp = []
    for(let word of str.split(" ")){
        temp.push(word[0].toUpperCase() + word.slice(1))
    }
    console.log("5:",temp.join(" "))
}
upperString(up)

let longest = "The Development Tutorial"

function longestWord(str){
    let longestW = ""
    for(let word of str.split(" ")){
        if(word.length > longestW.length){
            longestW = word
        }
    }
    console.log("6:",longestW)
}
longestWord(longest)

let vowelCountString = "the quick brown fox"

function voweCount(str){
    let count = 0
    for(let char of str.split("")){
        if("aeiouAEIOU".includes(char)){
            count++
        }
    }
    console.log("7: count:",count)
}
voweCount(vowelCountString)

let number = 10

function isPrime(num){
    if(num < 2){
        console.log("8:","Invalid Number. Please enter a number that is greater then 1")
        return false
    }
    let arr = findDivisors(num)
    if(arr.length == 2){
        console.log("8:","is Prime")
    }else{
        console.log("8:","is not Prime")
    }
}

function findDivisors(num){
    let arr =[]
    for(let i = 1; i<=num;i++){
        if(num % i == 0){
            arr.push(i)
        }
    }
    return arr
}
isPrime(number)

let arg = 1

function checkType(item){
    console.log("9:",typeof item)
}
checkType(arg)

let val = 4
function identityMatrix(num){
    let arr = []
    for(let i = 0; i < num; i++){
        let temp = []
        for(let j = 0; j < num; j++){

            if(i === j){
                temp.push("1")
            }else{
                temp.push("0")
            }
        }
        arr.push(temp)
    }
    console.log("10:",arr)
}
identityMatrix(val)

let array = [1,4,2,3,5]

function findSecondLowestHighest(arr){
    let temp = arr.sort()
    if(temp.length < 3){
        console.log("Enter Valid Array")
        return false
    }
    console.log("11:",temp[1],temp[temp.length-2])
}
findSecondLowestHighest(array)

let perfectNum = 28

function isPerfectNumber(num){

    let arr = findDivisors(num)
    let sum = 0
    for(let i = 0; i < arr.length-1; i++){
        sum += arr[i]
    }

    if(sum == arr[arr.length-1] && (sum + arr[arr.length-1]) / 2 == arr[arr.length-1]){
        console.log("12:",num,"is a perfect number")
    }else{
        console.log("12:",num,"is not a perfect number")
    }

}
isPerfectNumber(perfectNum)

let numberForFindingFactors = 10

console.log("13:",findDivisors(numberForFindingFactors))

let a = 46
let c = [25,10,5,2,1]

function amountToCoins(amount,coins){
    let temp = []
    if (amount === 0 || amount < 0) return 0;

    temp = coins.reduce((acc, cur) => {
        while (amount >= cur) {
            acc.push(cur);
            amount -= cur;
        }
        return acc;
    }, []);
    console.log("14:",temp)
}

amountToCoins(a,c)

let b = 5
let n = 3

function bn(base, num){
    let temp = 1
    for(let i=0;i<num;i++){
        temp *= base
    }
    console.log("15:",temp)
}
bn(b,n)

let stri = "thequickbrownfoxjumpsoverthelazydog"

function findUnique(str){
    const set1 = new Set(str.split(""))
    console.log("16:",Array.from(set1).join(""))
}

findUnique(stri)

let strin = "hello"
function letterCount(str){
    let dict = {}
    for(let letter of str){
        if(dict[letter]){
            dict[letter] = dict[letter] + 1
        }else{
            dict[letter] = 1
        }
    }
    console.log("17:",dict)
}
letterCount(strin)

let myArray = [1, 2, 6, 7, 10, 14, 15, 19, 20, 22];
function array_binarySearch(arr, target) {

    let start = 0, end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return mid
        }else if (arr[mid] < target) start = mid + 1
        else end = mid - 1
    }

    return "Target not found";
}


console.log("18: index:",array_binarySearch(myArray, 6));

let myArray1 = [1, 2, 5, 7, 10, 12, 15, 16]
let numberForLargerThen = 10
function largerThen(arr,num){
    let temp = []
    for(let item of arr){
        if(item > num){
            temp.push(item)
        }
    }
    console.log("19:",temp)
}
largerThen(myArray1,numberForLargerThen)

let stringIdLength = 15

function stringId(num){
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let temp = ""
    for(let i = 0; i < num; i++){
        temp += charList[getRandomChar(charList)]
    }
    console.log("20:",temp)
}
function getRandomChar(str){
    let rand = Math.floor(Math.random() * str.length)
    return rand
}

stringId(stringIdLength)
let subsetArr = [1, 2, 3]
function subset(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            temp.push([arr[j], arr[i]])
        }
    }
    return temp
}

console.log("21:",subset(subsetArr));

let stringToCount = "microsoft"
let letterToCount = "o"

function countLetterInString(str, letter){
    let count = 0
    for(let char of str){
        if(char === letter){
            count++
        }
    }
    console.log("22:",count)
}

countLetterInString(stringToCount,letterToCount)

let findNonRepeatString = 'abacddbec'

function findNonRepeat(str){
    let dict = {}
    for(let letter of str){
        if(dict[letter]){
            dict[letter] = dict[letter] + 1
        }else{
            dict[letter] = 1
        }
    }
    for(let value in dict){
        if(dict[value] === 1){
            console.log("23:",value)
            return 0
        }
    }
}
findNonRepeat(findNonRepeatString)

let bubbleSortArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 21]
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log("24:",arr)
}

bubbleSort(bubbleSortArray)

let countryNames = ["Australia", "Germany", "United States of America"]

function longestCountryName(str){
    let highestVal = ""
    for(let country in str){
        if(str[country].length > highestVal.length){
            highestVal = str[country]
        }
    }
    console.log("25:", highestVal)
}

longestCountryName(countryNames)

let stringForSubString = "google.com"

function longestSub(str){
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (temp.indexOf(str[i]) === -1) {
            temp += str[i]
        }
    }
    console.log("26:",temp)
    }
longestSub(stringForSubString)

let checkLongestPalindromeString = "abracacacadabra"
function is_palindrome(str){
    return str === str.split('').reverse().join('')
}

function longestPalindrome (str){
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let substring = str.slice(i, j + 1);
            if (substring.length > longest.length && is_palindrome(substring)) {
                longest = substring;
            }
        }
    }

    console.log("27:",longest)
};


longestPalindrome(checkLongestPalindromeString)
function tempFunc(){
    return 'hello'
}
function passFunction(func){

    console.log("28:", "function passed as paramater: returns hello:",func())
}
passFunction(tempFunc)

function getFunctionName(func){
    console.log("29:",func.name)
}
getFunctionName(isPalindrome)