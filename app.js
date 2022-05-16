// unknown types
// unknown is different to any
// it is better choice than any 
var userInput;
var userName;
userInput = 5;
userInput = 'Kion';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
