// импорты делаются в самом начале
<<<<<<< HEAD
// Playwright — это фреймворк для автоматизации тестирования на стороне клиента, который позволяет писать тесты для веб-приложений
=======
// Playwright — это фреймворк для автоматизации тестирования на стороне клиента, который позволяет писать тесты для веб-приложений. 
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
import { test, expect } from '@playwright/test';
// Faker — библиотека для генерации фальшивых данных
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage} from '../origin/pages/index';
const url = 'https://realworld.qa.guru/';

<<<<<<< HEAD
// test.scip — означает, что тест не будет пройден
// text.only — запустить только это тест
=======
// test.scip — означает, что тест не будет пройден.
// text.only — запустить только это тест.
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
let newUser;

test('Пользователь может зарегистрироваться с помощью email и пароля', async ({ page }) => {
  newUser = {
    userName: faker.person.firstName('female'), // 'Victoria'
    userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
    userPassword: faker.internet.password(),  
<<<<<<< HEAD
=======
    userBio: faker.person.bio(),
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
};
  const mainPage = new MainPage(page);
  await mainPage.open(url);
  await mainPage.register();
  const registerPage = new RegisterPage(page);
  await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);
});

test('Пользователь может авторизоваться с помощью email и пароля', async ({ page }) => {
  newUser = {
<<<<<<< HEAD
    userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
    userPassword: faker.internet.password(),  
=======
    userName: faker.person.firstName('female'), // 'Victoria'
    userEmail: faker.internet.email(), // 'Victoria@yandex.ru'
    userPassword: faker.internet.password(),  
    userBio: faker.person.bio(),
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
};
  const mainPage = new MainPage(page);
  await mainPage.open(url);
  await mainPage.register();
  const registerPage = new RegisterPage(page);
  await registerPage.authorization(newUser.userEmail, newUser.userPassword);
});




