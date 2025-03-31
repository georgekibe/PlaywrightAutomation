
const { test, expect } = require('@playwright/test')


test("Browser Load Page", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/locatorspractice/")

    console.log(await page.title())
    await expect(page).toHaveTitle('Rahul Shetty Academy - Login page')
});




