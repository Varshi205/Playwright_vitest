import { Page, expect, Locator } from "@playwright/test";
export class OrangeHRMPage {
  page: Page;
  username: Locator;
  password: Locator;
  loginButton: Locator;
  PIM: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.getByRole("textbox", { name: "Username" });
    this.password = this.page.getByRole("textbox", { name: "Password" });
    this.loginButton = this.page.getByRole("button", { name: "Login" });
    this.PIM = this.page.getByRole("link", { name: "PIM" });
  }

  async gotoLogin() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  async Login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async verifyLogin() {
    await expect(this.PIM).toBeVisible();
    await expect(this.page).toHaveTitle("OrangeHRM");
  }
}
