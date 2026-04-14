const accountId = 123456
let accountEmail = "sanjay@google.com"
var accountPassword = "654321"
accountCity = "Junagadh"
let accountState;

// accountId = 2 // not allowed

accountEmail = "steel1985@gmail.com"
accountPassword = "121121121"
accountCity = "Ahmedabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])