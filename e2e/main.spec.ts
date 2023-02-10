/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from "@playwright/test";

test("should have from and to in the main page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("textbox", { name: "from" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "to" })).toBeVisible();
});
