import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage, ArticklePage } from '../origin/pages/index';

const url = 'https://realworld.qa.guru/';
let newUser;
let newArticle;

// test.describe используется для группировки тестов
test.describe('Публикация статьи',() => {
    test.beforeEach('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
        newUser = {
            userName: faker.person.firstName('female'), // 'Victoria'
            userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
            userPassword: faker.internet.password(),  
            userBio: faker.person.bio(),
        };
        const mainPage = new MainPage(page);
        await mainPage.open(url);
        await mainPage.register();
        const registerPage = new RegisterPage(page);
        await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
    });
    
    test.beforeEach('Зарегистрированный пользователь может создать статью', async ({ page }) => {
        newArticle = {
            articleTitle: faker.person.jobTitle(),
            articleDescription: faker.lorem.paragraphs(),
            articleBody: faker.lorem.sentence(),
            articleTags: faker.lorem.word(3),
        }
        const settingsPage = new ArticklePage(page);
        await settingsPage.publish(newArticle.articleTitle,newArticle.articleDescription,newArticle.articleBody,newArticle.articleTags);
    });

    test('Зарегистрированный пользователь может изменить собственную статью', async ({ page }) => {
        newArticle = {
            articleTitle: faker.person.jobTitle(),
        }
        const settingsPage = new ArticklePage(page);
        await settingsPage.edit(newArticle.articleTitle);
    });

});



       