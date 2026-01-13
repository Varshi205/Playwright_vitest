import { Locator, Page, expect } from '@playwright/test';

export class PlaywrightPage {
  page: Page;
    getStarted: Locator;
    Introduction: Locator;
  constructor(page: Page) {
    this.page = page;
    this.getStarted = this.page.getByRole('link', { name: 'Get Started' });
    this.Introduction = this.page.locator('#introduction');
  }

  async gotoHome() {
    await this.page.goto('https://playwright.dev');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async clickGetStarted() {
    await this.getStarted.click();
  }

  async verifyIntroductionHeading() {
    await expect(this.Introduction).toContainText(/Introduction/);
  }
}