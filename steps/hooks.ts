import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

// Increase Cucumber step timeout to 60s to avoid intermittent navigation timeouts
setDefaultTimeout(60 * 1000);

declare module "@cucumber/cucumber" {
  interface World {
    browser: Browser;
    context: BrowserContext;
    page: Page;
  }
}

Before(async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 100 });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  // Also set Playwright timeouts for actions and navigation
  this.page.setDefaultTimeout(30 * 1000);
  this.page.setDefaultNavigationTimeout(60 * 1000);
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});
