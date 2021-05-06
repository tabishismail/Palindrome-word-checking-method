//*********** */ Palindrome word checking method # 1*********** 

// var userInput=prompt("Enter Value");
// var check = "";

// for(i=userInput.length-1; i>=0; i--){
//     check+= userInput[i];
// }
// if(userInput== check){
//     document.write("Its a Palindrome word");
// }else{
//     document.write("Its not a Palindrome word");
// }

//*********** */ Palindrome word checking method # 1*********** 
var userInput=prompt("Enter Value");
var check=userInput.split("").reverse().join("");
if(userInput== check){
    document.write("Its a Palindrome word");
}else{
    document.write("Its not a Palindrome word");
}