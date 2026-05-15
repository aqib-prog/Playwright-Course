import { Page } from "@playwright/test";

export class SearchPage {
  private page: Page;

  //Locators
  private searchInput = "#search_product";
  private searchButton = "#submit_search";
  private searchedProducts = ".features_items";

  constructor(page: Page) {
    this.page = page;
  }

  async searchProduct(productName: string) {
    await this.page.locator(this.searchInput).fill(productName);
    await this.page.locator(this.searchButton).click();
  }

  async isSearchResultsVisible() {
    return await this.page.locator(this.searchedProducts).isVisible();
  }
}
