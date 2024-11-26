import { faker } from '@faker-js/faker';


// Класс для построения объекта пользователя
class UserBuilder {
    addEmail() {// Метод для добавления email пользователю, генерируемый с помощью Faker
        this.userEmail = faker.internet.email();// Генерация случайного email
        return this;// Возврат текущего экземпляра для цепочки вызовов
    }
    addName() {
        this.userName = faker.person.firstName('female');
        return this;
    }
    addPassword() {
        this.userPassword = faker.internet.password();
        return this;
    }
    addBio() {
        this.userBio = faker.person.bio();
        return this;
}
    generate() {// Метод для генерации объекта пользователя с текущими данными
        const copied = structuredClone({// Клонирование объекта 
            userEmail: this.userEmail,
            userName: this.userName,
            userPassword: this.userPassword,
            userBio: this.userBio,
        }
    ) 
        return copied;// Возвращаем объект пользователя с добавленными свойствам
    }
};

export {UserBuilder};