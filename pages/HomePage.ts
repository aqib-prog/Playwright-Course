import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  //Locators
  private signupLoginLink = 'a[href="/login"]';
  private loggedInAs = 'a[href="/logout"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickSignupLogin() {
    await this.page.locator(this.signupLoginLink).click();
  }

  async isLoggedIn() {
    return await this.page.locator(this.loggedInAs).isVisible();
  }
}
