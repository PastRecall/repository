// импорты делаются в самом начале
// Playwright — это фреймворк для автоматизации тестирования на стороне клиента, который позволяет писать тесты для веб-приложений
import { test, expect } from '@playwright/test';
// Faker — библиотека для генерации фальшивых данных
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage} from '../origin/pages/index';
const url = 'https://realworld.qa.guru/';

// test.scip — означает, что тест не будет пройден
// text.only — запустить только это тест
let newUser;

test('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
  newUser = {
    userName: faker.person.firstName('female'), // 'Victoria'
    userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
    userPassword: faker.internet.password(),  
};
  const mainPage = new MainPage(page);
  await mainPage.open(url);
  await mainPage.register();
  const registerPage = new RegisterPage(page);
  await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
});

test('Пользователь может авторизоваться с помощью email и пароля', async ({ page }) => {
  newUser = {
    userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
    userPassword: faker.internet.password(),  
};
  const mainPage = new MainPage(page);
  await mainPage.open(url);
  await mainPage.register();
  const registerPage = new RegisterPage(page);
  await registerPage.authorization(newUser.userEmail, newUser.userPassword);
});




