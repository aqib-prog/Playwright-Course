import { test, expect } from "../fixtures/base";

test("TC1: Verify home page is visible", async ({ page }) => {
  await expect(page).toHaveTitle("Automation Exercise");
});

test("TC2: Login with valid credentials", async ({ loginPage, page }) => {
  await loginPage.login("fakemail45644@gmail.com", "Fake@Mail");

  // Verify logged in
  await expect(page.getByText("Logged in as")).toBeVisible();
});

test("TC3: Login with invalid credentials", async ({ loginPage, page }) => {
  await loginPage.login("wrongemail@gmail.com", "wrongpassword");

  // Verify error message
  await expect(
    page.getByText("Your email or password is incorrect!")
  ).toBeVisible();
});
