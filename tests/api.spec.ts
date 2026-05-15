import { test, expect } from "@playwright/test";

test("API: Get all products", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList"
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.products.length).toBeGreaterThan(0);
});

test("API: Get product details", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/searchProduct",
    {
      form: {
        search_product: "top",
      },
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.products.length).toBeGreaterThan(0);
});
