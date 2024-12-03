import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage, ArticlePage } from '../origin/pages/index';

const url = 'https://realworld.qa.guru/';
let newUser;
let newArticle;

// test.describe используется для группировки тестов
test.describe('Публикация статьи',() => {
    test.beforeEach(async ({ page }) => {
        // Пользователь может зарегистрироваться с помощью email и пароля
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

        // Зарегистрированный пользователь может создать статью
        newArticle = {
            articleTitle: faker.person.jobTitle(),
            articleDescription: faker.lorem.paragraphs(),
            articleBody: faker.lorem.sentence(),
            articleTags: faker.lorem.word(3),
        }
        const settingsPage = new ArticlePage(page);
        await settingsPage.publish(newArticle.articleTitle,newArticle.articleDescription,newArticle.articleBody,newArticle.articleTags);
        await expect(page.getByRole('heading', { name: newArticle.articleTitle })).toBeVisible() 
    });

    test('Зарегистрированный пользователь может изменить собственную статью', async ({ page }) => {
        newArticle = {
            articleTitle: faker.person.jobTitle(),
        }
        const settingsPage = new ArticlePage(page);
        await settingsPage.edit(newArticle.articleTitle);
        await expect(page.getByPlaceholder('Article Title')).toHaveValue(newArticle.articleTitle); 
    });

});



       