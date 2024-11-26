import { BasePage } from "./base.page"; // Импортируем базовый класс BasePage

// Класс MainPage, который наследует (extends) свойства и методы от класса BasePage
class MainPage extends BasePage{
    constructor (page) {
    // Вызываем конструктор родительского класса BasePage с помощью super(page)
    super(page);
    // Создаем свойство singupButton, которое будет хранить ссылку на кнопку "Зарегистрироваться"
    // Метод getByRole ищет элемент на странице по типу(в данном случае 'Link') и имени ('Sing up')
        this.singupButton = page.getByRole('link', { name: 'Sign up' });
    }
    // Асинхронный метод register, который отвечает за регистрацию пользователя
    async register () {
        await this.singupButton.click();
    }
}
export {MainPage};


 