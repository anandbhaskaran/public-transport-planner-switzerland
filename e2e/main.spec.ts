/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from "@playwright/test";

test("should have two combobox and a button on the main page", async ({
  page,
}) => {
  await page.goto("/");
  expect(await page.getByRole("combobox").count()).toEqual(2);
  await expect(page.getByRole("combobox", { name: "from" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "to" })).toBeVisible();
  await expect(page.getByRole("button", { name: "search" })).toBeVisible();
});

test("autocomplete works as expected", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("combobox", { name: "from" })
    .type("olten", { delay: 200 });
  expect(await page.getByRole("option").count()).toEqual(10);
});

test("contains what's new section", async ({ page }) => {
  await page.goto("/");
  const allLinks = await page.getByRole("link").allInnerTexts();
  await expect(allLinks).toContain("What's new?");
});
