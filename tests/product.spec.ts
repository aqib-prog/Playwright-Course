import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";

test.beforeEach(async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();
});

test("TC4: Verify the All Products text is visible", async ({ page }) => {
  const productPage = new ProductPage(page);
  await expect(page.getByText("All Products")).toBeVisible();
  const isVisible = await productPage.isProductListVisible();
  expect(isVisible).toBeTruthy();
});

test("TC5: Verify the product detail is visible", async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.clickFirstProduct();
  await expect(page.getByText("Availability: In Stock")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
});
