import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  // Locators
  private emailInput = '[data-qa="login-email"]';
  private passwordInput = '[data-qa="login-password"]';
  private loginButton = '[data-qa="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
