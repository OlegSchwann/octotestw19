import main from '../../steps/main';
import lettersSteps from '../../steps/letters/index'

describe('test id', () => {
    const message = 'Авторизоваться, поменять статус письма с прочитанного на непрочитанное (и наоборот), убедиться, что статус изменился.';
    it(message, () => {
        let login = process.env['LOGIN'];
        let password = process.env['PASSWORD'];
        if (!login || !password) {
            throw Error("Env must have LOGIN and PASSWORD variables.")
        }

        main.open('https://mail.ru');

        main.login(login, password);

        main.open('https://octavius.mail.ru/inbox/');

        lettersSteps.checkReadFlagChanged();
    });
});
