import { test } from "../../helpers/fixtures";
import {expect} from "@playwright/test";


test.describe('Authentication tests', () => {
    test('Should be possible to sign in to the app', async ({app}) => {
        await app.loginPage.navigateToPage();
        await app.loginPage.fillUsername('test');
        await app.loginPage.fillPassword('qwerty');

        await app.loginPage.submitLoginForm();
        await expect(app.dashboardPage.elements.dashboard).toBeVisible();
    });
})