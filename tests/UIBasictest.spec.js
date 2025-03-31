
const { test }  = require ('@playwright/test')


test ("Browser Load Page", async ({page}) => {
await page.goto("https://rahulshettyacademy.com/locatorspractice/")
});




