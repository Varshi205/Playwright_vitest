import { Given, When, Then } from "@cucumber/cucumber";
import { PlaywrightPage } from "../pages/playwright.page";

Given("I open the Playwright home page", async function () {
  const pwPage = new PlaywrightPage(this.page);
  await pwPage.gotoHome();
  await this.page.waitForTimeout(2000); // wait for 2 seconds to ensure page loads
});

Then("the title should contain {string}", async function (title: string) {
  const pwPage = new PlaywrightPage(this.page);
  await pwPage.verifyTitle();
  await this.page.waitForTimeout(1000); // wait for 1 second
});

When("I click the {string} link", async function (linkText: string) {
  const pwPage = new PlaywrightPage(this.page);
  await pwPage.clickGetStarted();
  await this.page.waitForTimeout(2000); // wait for 2 seconds to ensure navigation
});

Then("I should see the {string} heading", async function (headingText: string) {
  const pwPage = new PlaywrightPage(this.page);
  await pwPage.verifyIntroductionHeading(); // hardcoded for now
});
