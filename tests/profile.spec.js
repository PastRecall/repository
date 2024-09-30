import { test, expect } from '@playwright/test';
import { App } from '../origin/pages/index'
import { UserBuilder } from '../origin/helpers/index';

const url = 'https://realworld.qa.guru/';
let newUser;
let app;

test.describe('Профиль пользователя',() => {
    test.beforeEach('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
        newUser = new UserBuilder().addBio().addEmail().addName().addPassword().generate();
        app = new App(page);
        await app.mainPage.open(url);
        await app.mainPage.register();
        await app.registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
    });

    test('Зарегистрированный пользователь может изменить биографию', async ({ page }) => {
        await app.settingsPage.modificationBio(newUser.userBio);
    });

    test('Зарегистрированный пользователь может разлогиниться', async ({ page }) => {
        await app.settingsPage.logout ()
    });  
});
