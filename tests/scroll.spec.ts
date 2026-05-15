import { test, expect } from "@playwright/test";

test("TC7: Scroll down to bottom of the page to subscribe", async ({
  page,
}) => {
  await page.goto("/");

  // Scroll to the bottom of the page
  await page
    .getByRole("textbox", { name: "Your email address" })
    .scrollIntoViewIfNeeded();

  // Verify SUBSCRIPTION text is visible
  await expect(page.getByText("SUBSCRIPTION")).toBeVisible();

  // Enter email and subscribe
  await page
    .getByRole("textbox", { name: "Your email address" })
    .fill("s7GdA@example.com");

  await page.locator("#subscribe").click();

  // Verify success message
  await expect(
    page.getByText("You have been successfully subscribed!")
  ).toBeVisible();
});
