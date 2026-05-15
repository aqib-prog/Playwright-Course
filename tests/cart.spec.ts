import { test, expect } from "@playwright/test";
import { CartPage } from "../pages/CartPage";

test("TC7: Verify that product is added to cart", async ({ page }) => {
  await page.goto("/products");

  const cartPage = new CartPage(page);
  await cartPage.addFirstProductToCart();

  // Go to the cart
  await page.goto("/view_cart");

  //Verify that product in cart
  const isVisible = await cartPage.isProductInCart();
  expect(isVisible).toBeTruthy();
});
