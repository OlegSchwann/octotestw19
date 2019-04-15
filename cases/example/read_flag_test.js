import main from '../../steps/main';
import lettersSteps from '../../steps/letters/index'

// пример теста
describe('test id', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://mail.ru');
		main.login('olegschwann@inbox.ru', 'yksxswscfv6pmsnq');
		main.open('https://octavius.mail.ru/inbox/');
		lettersSteps.checkReadFlagChanged();
	});
});
