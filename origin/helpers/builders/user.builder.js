import { faker } from '@faker-js/faker';

<<<<<<< HEAD

// Класс для построения объекта пользователя
class UserBuilder {
    addEmail() {// Метод для добавления email пользователю, генерируемый с помощью Faker
        this.userEmail = faker.internet.email();// Генерация случайного email
        return this;// Возврат текущего экземпляра для цепочки вызовов
=======
class UserBuilder {
    addEmail() {
        this.userEmail = faker.internet.email();
        return this;
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
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
<<<<<<< HEAD
    generate() {// Метод для генерации объекта пользователя с текущими данными
        const copied = structuredClone({// Клонирование объекта 
=======
    generate() {
        const copied = structuredClone({
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
            userEmail: this.userEmail,
            userName: this.userName,
            userPassword: this.userPassword,
            userBio: this.userBio,
        }
    ) 
<<<<<<< HEAD
        return copied;// Возвращаем объект пользователя с добавленными свойствам
=======
        return copied;
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
    }
};

export {UserBuilder};