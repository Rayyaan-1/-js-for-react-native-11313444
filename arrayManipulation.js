function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
    
}
const numbers = [6, 7, 4, 3, 10];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);


//TASK 2

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => 
        processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
    );
}
