/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from "@playwright/test";

test("should be redirected to main page if from is missing", async ({
  page,
}) => {
  await page.goto("journey?to=test", { waitUntil: "networkidle" });
  expect(page.url()).not.toContain("journey");
});

test("should be redirected to main page if to param is missing", async ({
  page,
}) => {
  await page.goto("journey?from=test", { waitUntil: "networkidle" });
  expect(page.url()).not.toContain("journey");
});

test("should have two combobox and a button on the journey page", async ({
  page,
}) => {
  await page.goto("/journey?from=olten&to=zurich");
  expect(await page.getByRole("combobox").count()).toEqual(2);
  await expect(page.getByRole("combobox", { name: "from" })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "to" })).toBeVisible();
  await expect(page.getByRole("button", { name: "search" })).toBeVisible();
});

test("autocomplete works as expected", async ({ page }) => {
  await page.goto("/journey?from=olten&to=zurich");
  await page.getByRole("combobox", { name: "from" }).clear();
  await page
    .getByRole("combobox", { name: "from" })
    .type("olten", { delay: 150 });
  expect(await page.getByRole("option").count()).toEqual(10);
});

test("contains what's new section", async ({ page }) => {
  await page.goto("/journey?from=olten&to=zurich");
  const allLinks = await page.getByRole("link").allInnerTexts();
  await expect(allLinks).toContain("What's new?");
});
