
//dynamic value
let name = "pallavi";
let fullName = `hi ${name} thorat`;
console.log(fullName); //hi pallavi thorat

let env = "staging";
env = "prod";
const userId = 123;
const url = `https://api-${env}.tekion.com/users/${userId}`;
console.log(url);

//locator
const index = 1;
const columnvalue = "email";
await pageXOffset.locator(`[data-row ="${index}"] [data-col ="${columnName}"]`).click();

//logs

const testname = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status} ${testname} completed in ${duration}]sec`);

//screenshot

const testcase = "checkout_flow";
const timestamp = Date.now();
await pageXOffset.screenshot({ path: `screenshots/$(testcase)_$(timestamp).png` });