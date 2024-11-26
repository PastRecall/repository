import { BasePage } from "./base.page";
<<<<<<< HEAD
=======
import { expect } from '@playwright/test';
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b

class SettingsPage extends BasePage {
    constructor (page) {
        super(page);
        this.dropdownTogle = this.page.locator('.dropdown-toggle');
        this.settings = this.page.getByRole('link', { name: 'Settings' });
        this.bioField = this.page.getByPlaceholder('Short bio about you');
        this.updateSettingsButton = this.page.getByRole('button', 'Update Settings');
        this.logoutLink = this.page.getByRole('link', { name: 'Logout' })
    }
    async modificationBio (userBio) {
        await this.dropdownTogle.click();
        await this.settings.click();
        await this.bioField.fill(userBio);
        await this.updateSettingsButton.click();
<<<<<<< HEAD
=======
        await expect(this.bioField).toBeVisible(userBio);
>>>>>>> 7bdf436efcf3eeadce70b6346e6baab953a6e93b
    }
    async logout () {
        await this.dropdownTogle.click();
        await this.logoutLink.click();
        await this.page.getByRole('link', { name: 'Sign up' }).waitFor({ state: 'visible' });
    }
}


// Экспорт класса SettingsPage для использования в других модулях
export {SettingsPage};





