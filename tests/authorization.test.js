import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage} from '../origin/pages/index';
const url = 'https://realworld.qa.guru/';

test('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
    const newUser = {
      userName: faker.person.firstName('female'),
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password(),  
    };
    
    const mainPage = new MainPage(page);
    await mainPage.open(url);
    await mainPage.register();
    const registerPage = new RegisterPage(page);
    await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
    await expect(registerPage.dropdownButton).toContainText(newUser.userName);
});

test('Пользователь может авторизоваться с помощью email и пароля', async ({ page }) => {
    const newUser = {
      userName: faker.person.firstName('female'),
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password(),  
    };
    
    const mainPage = new MainPage(page);
    await mainPage.open(url);
    await mainPage.register();
    const registerPage = new RegisterPage(page);
    await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
    await mainPage.open(url); 
    await registerPage.authorization(newUser.userEmail, newUser.userPassword);
    await expect(registerPage.dropdownButton).toContainText(newUser.userName);
});
