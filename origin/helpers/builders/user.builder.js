import { faker } from '@faker-js/faker';

class UserBuilder {
    addEmail() {
        this.userEmail = faker.internet.email();
        return this;
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
    generate() {
        const copied = structuredClone({
            userEmail: this.userEmail,
            userName: this.userName,
            userPassword: this.userPassword,
            userBio: this.userBio,
        }
    ) 
        return copied;
    }
};

export {UserBuilder};