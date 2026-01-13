import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { OrangeHRMPage } from "../pages/orangeHRM.page";

Given("I open the OrangeHRM login page", async function () {
  const orangeHRMPage = new OrangeHRMPage(this.page);
  await orangeHRMPage.gotoLogin();
  await this.page.waitForTimeout(5000); // wait for 2 seconds to ensure page loads
});
When(
  "I enter username {string} and password {string}",
  async function (username: string, password: string) {
    const orangeHRMPage = new OrangeHRMPage(this.page);
    await orangeHRMPage.Login(username, password);
    await this.page.waitForTimeout(5000); // wait for 1 second
  }
);
When("I click the login button", async function () {
  const orangeHRMPage = new OrangeHRMPage(this.page);
  await orangeHRMPage.clickLogin();
  await this.page.waitForTimeout(5000); // wait for 2 seconds to ensure navigation
});
Then("the title should be {string}", async function (expectedTitle: string) {
  const orangeHRMPage = new OrangeHRMPage(this.page);
  await orangeHRMPage.verifyLogin();
  await this.page.waitForTimeout(5000); // wait for 1 second
  await expect(this.page).toHaveTitle(expectedTitle);
});
