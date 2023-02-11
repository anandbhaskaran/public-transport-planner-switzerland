/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from "@playwright/test";

test("should have two combobox and a button on the main page", async ({
  page,
}) => {
  await page.goto("/");
  expect(await page.getByRole("combobox").count()).toEqual(2);
  await expect(page.getByRole("button", { name: "search" })).toBeVisible();
});
