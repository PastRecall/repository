import { BasePage } from "./base.page";
import { expect } from '@playwright/test';

class ArticklePage extends BasePage {
    constructor (page) {
        super(page);
        this.newArticleButton = this.page.getByRole('link', { name: 'New Article' });
        this.titleField = this.page.getByPlaceholder('Article Title');
        this.descriptionField = page.getByPlaceholder('What\'s this article about?');
        this.bodyField = this.page.getByPlaceholder('Write your article (in');
        this.tagsField = this.page.getByPlaceholder('Enter tags');
        this.publishArticleButton = this.page.getByRole('button', { name: 'Publish Article' });
        this.deleteArticle = this.page.getByRole('button', { name: 'Delete Article' }).nth(1);
        this.editArticle = this.page.getByRole('link', { name: 'Edit Article' }).first();
    }
    async publish (articleTitle,articleDescription,articleBody,articleTags) {
        await this.newArticleButton.click();
        await this.titleField.click();
        await this.titleField.fill(articleTitle);
        await this.descriptionField.click();
        await this.descriptionField.fill(articleDescription);
        await this.bodyField.click();
        await this.bodyField.fill(articleBody);
        await this.tagsField.click();
        await this.tagsField.fill(articleTags);
        await this.publishArticleButton.click();
        await expect(this.page.locator('//main/div/div[1]/div/h1')).toContainText(articleTitle);
        await expect(this.page.locator('//main/div/div[2]/div[1]/div/p')).toContainText(articleBody);
        await expect(this.page.locator('//main/div/div[2]/div[1]/div/ul/li')).toContainText(articleTags);
    }
    async edit (articleTitle) {
        await this.editArticle.click();
        await this.titleField.click();
        await this.titleField.fill(''); 
        await this.titleField.fill(articleTitle); 
        await expect(this.titleField).toHaveValue(articleTitle); 
    }
}
// Экспорт класса ArticklePage для использования в других модулях
export {ArticklePage};
