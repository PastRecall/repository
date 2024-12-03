import { MainPage, RegisterPage, SettingsPage, ArticlePage } from './index';

class App {
    constructor(page) {
        this.mainPage = new MainPage(page);
        this.registerPage = new RegisterPage(page);
        this.settingsPage = new SettingsPage(page);
        this.articlePage = new ArticlePage(page);
    }
}
export {App};