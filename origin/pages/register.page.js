import { BasePage } from "./base.page";
import { allure } from "allure-playwright";

class RegisterPage extends BasePage {
    constructor (page) {
        super(page);
        this.emailField = this.page.getByPlaceholder('Email');
        this.passwordField = this.page.getByPlaceholder('Password');
        this.userNameField = this.page.getByPlaceholder('Your Name');
        this.singupButton = this.page.getByRole('button', { name: 'Sign up' });
        this.login = this.page.getByRole('link', { name: 'Login' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.dropdownButton = this.page.locator('.dropdown-toggle');
        this.navigation = this.page.getByRole('navigation');
    }
// Метод для регистрации пользователя   
    async register (userName, userEmail, userPassword) {
        await allure.step("Ввести имя пользователя, электронную почту и пароль", async () => {
        await this.userNameField.click();
        await this.userNameField.fill(userName);
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        await this.passwordField.click();
        await this.passwordField.fill(userPassword);
        await this.singupButton.click();
        });
    }
//Метод для авторизации пользователя   
    async authorization(userEmail, userPassword) { 
        await allure.step("Ввести электронную почту и пароль", async () => {
        await this.login.click();
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        await this.passwordField.click();
        await this.passwordField.fill(userPassword);
        await this.loginButton.click();
        });
    }
}
// Экспорт класса RegisterPage для использования в других модулях
export {RegisterPage};

