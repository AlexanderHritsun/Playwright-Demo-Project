import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    url = '/';
    elements = {
        usernameInput: this.page.locator('#username'),
        passwordInput: this.page.locator('#password'),
        submitButton: this.page.locator('button.submit')
    }

    async fillUsername(username: string) {
        await this.elements.usernameInput.fill(username);
    }

    async fillPassword(password: string) {
        return this.elements.usernameInput.fill(password);
    }

    async submitLoginForm() {
        await this.elements.submitButton.click();
    }
}