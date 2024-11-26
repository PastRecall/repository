import { BasePage } from "./base.page";

class ArticlePage extends BasePage {
    constructor (page) {
        super(page);
        this.newArticle = this.page.getByRole('link', { name: 'New Article' });
        this.titleField = this.page.getByPlaceholder('Article Title');
        this.descriptionField = page.getByPlaceholder('What\'s this article about?');
        this.bodyField = this.page.getByPlaceholder('Write your article (in');
        this.tagsField = this.page.getByPlaceholder('Enter tags');
        this.publishArticle = this.page.getByRole('button', { name: 'Publish Article' });
        this.deleteArticle = this.page.getByRole('button', { name: 'Delete Article' }).nth(1);
        this.editArticle = this.page.getByRole('link', { name: 'Edit Article' }).first();
    }
    async publish (articleTitle,articleDescription,articleBody,articleTags) {
        await this.newArticle.click();
        await this.titleField.click();
        await this.titleField.fill(articleTitle);
        await this.descriptionField.click();
        await this.descriptionField.fill(articleDescription);
        await this.bodyField.click();
        await this.bodyField.fill(articleBody);
        await this.tagsField.click();
        await this.tagsField.fill(articleTags);
        await this.publishArticle.click();
    }
    async edit (articleTitle) {
        await this.editArticle.click();
        await this.titleField.click();
        await this.titleField.fill(''); 
        await this.titleField.fill(articleTitle); 
    }
}
// Экспорт класса ArticlePage для использования в других модулях
export {ArticlePage};
