import { Page } from "@playwright/test";

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private productList = ".features_items";
  async goto() {
    await this.page.goto("/products");
  }

  async isProductListVisible() {
    return await this.page.locator(this.productList).isVisible();
  }
  async clickFirstProduct() {
    await this.page
      .getByRole("link", { name: " View Product" })
      .first()
      .click();
    try {
      await this.page
        .locator('iframe[name="aswift_3"]')
        .contentFrame()
        .getByRole("button", { name: "Close ad" })
        .click();
    } catch {}
  }
}
