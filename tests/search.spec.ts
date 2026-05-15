import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/products");
});

test("TC6: Search for a product", async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.searchProduct("Top");
  await expect(page.getByText("SEARCHED PRODUCTS")).toBeVisible();
  const isVisible = await searchPage.isSearchResultsVisible();
  expect(isVisible).toBeTruthy();
});
