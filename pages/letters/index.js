import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '.dataset__items';

		return {
			container,
			firstLetterFlag: () => {return `${this.locators.container} a.llc:nth-child(1) button.ll-rs`;}
		}
	}

	/**
	 * Проверяет, является ли первое письмо прочитанным.
	 * @returns {boolean}
	 */
	hasFirstLetterReadFlag() {
		this.page.waitForVisible(this.locators.firstLetterFlag());
		let is_active = this.hasClass(this.locators.firstLetterFlag(), "ll-rs_is-active");
		return is_active;
	}

	/**
	 * Нажать на кнопку "прочитано" для первого письма."
	 */
	clickOnFlag() {
		this.page.click(this.locators.firstLetterFlag());
	}

}

export default new LettersPage();
