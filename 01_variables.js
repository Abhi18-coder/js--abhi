const accountId = 180001
let accountEmail = "abhit8568@gmail.com"
var accountPasword = "@a0001"
accountCity = "Delhi"
let accountState;

// accountId = 18 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "@101010"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and personal scope
*/

console.table([accountId, accountEmail, accountPasword, accountCity, accountState])