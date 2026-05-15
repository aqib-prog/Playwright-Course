import { test, expect } from "@playwright/test";
test("TC8: Verify that user can submit contact form successfully", async ({
  page,
}) => {
  await page.goto("/contact_us");

  await expect(page.getByText("Get In Touch")).toBeVisible();

  // Fill form
  await page.getByRole("textbox", { name: "Name" }).fill("Test User");
  await page
    .getByRole("textbox", { name: "Email", exact: true })
    .fill("test@test.com");
  await page.getByRole("textbox", { name: "Subject" }).fill("Test Subject");
  await page
    .getByRole("textbox", { name: "Your Message Here" })
    .fill("This is a test message");

  //Upload File
  await page
    .getByRole("button", { name: "Choose File" })
    .setInputFiles("package.json");

  // Handle dialog
  page.once("dialog", (dialog) => {
    dialog.accept();
  });

  // Submit
  await page.getByRole("button", { name: "Submit" }).click();

  // Verify success
  await expect(
    page.locator("#contact-page").getByText("Success! Your details have")
  ).toBeVisible({ timeout: 10000 });
});
