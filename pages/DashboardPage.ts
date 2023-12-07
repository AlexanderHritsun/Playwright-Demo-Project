import {BasePage} from "./BasePage";

export class DashboardPage extends BasePage {
    url = '/';
    elements = {
        dashboard: this.page.locator('#dashboard')
    }
}