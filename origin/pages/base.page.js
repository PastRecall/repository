// Определяем класс с именем BasePage (БазоваяСтраница)
// Классы в JavaScript используются для создания объектов с общими свойствами и методами
class BasePage {
   // Конструктор, который вызывается при создании нового объекта класса BasePage
   // Параметр 'page' представляет собой страницу, с которой мы будем работать
    constructor (page) {
       this.page = page; // Сохраняем переданную страницу в свойстве 'this.page'
    }
 
    // Асинхронный метод 'open', который открывает веб-страницу по указанному URL
    async open (url) {
       // Метод 'goto' означает "перейти на" указанную страницу
       await this.page.goto(url);
    }
 }
 export {BasePage};