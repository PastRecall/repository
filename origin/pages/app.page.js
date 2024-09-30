import { MainPage, RegisterPage, SettingsPage } from './index';

class App {
    constructor(page) {
        this.mainPage = new MainPage(page);
        this.registerPage = new RegisterPage(page);
        this.settingsPage = new SettingsPage(page);
    }
}
export {App};