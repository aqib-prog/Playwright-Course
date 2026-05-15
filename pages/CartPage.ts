import { Page } from "@playwright/test";

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/view_cart");
  }

  async addFirstProductToCart() {
    // Scroll first product into view
    await this.page
      .locator(".product-image-wrapper")
      .first()
      .scrollIntoViewIfNeeded();

    // Hover over first product
    await this.page.locator(".product-image-wrapper").first().hover();

    // Click overlay
    await this.page.locator(".product-overlay").first().click();

    // Click Add to cart
    await this.page.getByText("Add to cart").nth(1).click();

    // Continue shopping
    await this.page.getByRole("button", { name: "Continue Shopping" }).click();
  }
  async isProductInCart() {
    return await this.page.locator("#cart_info_table").isVisible();
  }
}
