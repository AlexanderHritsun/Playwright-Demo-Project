import {BasePage} from "./BasePage";
import {LoginPage} from "./LoginPage";
import {Page} from "@playwright/test";
import {DashboardPage} from "./DashboardPage";

export class App extends BasePage {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;

    constructor(page: Page) {
        super(page);
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
    }
}